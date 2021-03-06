(function () {
  'use strict';

  angular.module('ngGLPI', [])
    .service('GLPI', function ($q, $http) {
      var maxRange = 1000;
      var validateItemType = false;
      var sessionToken = false;
      var appToken = false;
      var apiUrl = false;
      var endpoints = {
        Initsession: "initSession ",
        Killsession: "killSession ",
        GetMyProfiles: "getMyProfiles ",
        GetActiveProfile: "getActiveProfile ",
        ChangeActiveProfile: "changeActiveProfile ",
        GetMyEntities: "getMyEntities ",
        GetActiveEntities: "getActiveEntities ",
        ChangeActiveEntities: "changeActiveEntities ",
        GetFullSession: "getFullSession ",
        GetMultipleItems: "getMultipleItems ",
        ListSearchOptions: "listSearchOptions ",
        SearchItems: "search"
      };
      var errorMsg = {
        invalid_url: [
          'ERROR_INVALID_URL', ''],
        invalid_itemtype: [
          'ERROR_ITEM_NOT_FOUND', ''],
        invalid_range: [
          'ERROR_INVALID_RANGE', ''],
        invalid_authorization: [
          'ERROR_INVALID_AUTHORIZATION', ''],
      };
      String.prototype.toConcatSlash = function () {
        var lastChar = this.substr(-1);
        if (lastChar !== '/') {
          return this + '/';
        }
        return this;
      };
      function validURL(url) { //ToDo validate a GLPi API REST URL
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
          '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return pattern.test(url);
      }
      function validItemType(itemtype) {
        var itemtypes = [
          'Alert',
          'AuthLDAP',
          'Computer',
          'Config',
          'ConsumableItem',
          'Contact',
          'Contract',
          'CronTask',
          'CronTaskLog',
          'DBConnection',
          'DisplayPreference',
          'Document',
          'AuthLdapReplicate',
          'Event',
          'KnowbaseItem',
          'Link',
          'Log',
          'MailCollector',
          'Monitor',
          'NetworkEquipment',
          'Notification',
          'NotificationEvent',
          'NotificationMailSetting',
          'AuthMail',
          'NotificationTemplate',
          'NotImportedEmail',
          'Peripheral',
          'Phone',
          'Plugin',
          'Printer',
          'Profile',
          'Project',
          'QueuedMail',
          'Reminder',
          'Bookmark',
          'RSSFeed',
          'Rule',
          'RuleCollection',
          'SLA',
          'SlaLevel_Ticket',
          'Software',
          'SoftwareLicense',
          'Supplier',
          'TicketFollowup',
          'TicketSatisfaction',
          'CartridgeItem',
          'Transfer',
          'User',
          'CommonDBConnexity',
          'CommonDropdown',
          'CommonITILObject',
          'CommonITILTask',
          'AutoUpdateSystem',
          'Blacklist',
          'CartridgeItemType',
          'Item_DeviceSoundCard',
          'Item_Problem',
          'Item_Project',
          'Item_Ticket',
          'ITILCategory',
          'KnowbaseItem_Profile',
          'KnowbaseItem_User',
          'KnowbaseItemCategory',
          'KnowbaseItemTranslation',
          'Link_Itemtype',
          'Change',
          'Location',
          'Manufacturer',
          'MonitorModel',
          'MonitorType',
          'Netpoint',
          'Network',
          'NetworkAlias',
          'NetworkEquipmentFirmware',
          'NetworkEquipmentModel',
          'NetworkEquipmentType',
          'Change_Group',
          'NetworkInterface',
          'NetworkName',
          'NetworkPort',
          'NetworkPort_NetworkPort',
          'NetworkPort_Vlan',
          'NetworkPortAggregate',
          'NetworkPortAlias',
          'NetworkPortDialup',
          'NetworkPortEthernet',
          'NetworkPortInstantiation',
          'Change_Item',
          'NetworkPortLocal',
          'NetworkPortMigration',
          'NetworkPortWifi',
          'Notepad',
          'NotificationTarget',
          'NotificationTargetCartridgeItem',
          'NotificationTargetChange',
          'NotificationTargetCommonITILObject',
          'NotificationTargetConsumableItem',
          'NotificationTargetContract',
          'Change_Problem',
          'NotificationTargetCrontask',
          'NotificationTargetDBConnection',
          'NotificationTargetFieldUnicity',
          'NotificationTargetInfocom',
          'NotificationTargetMailCollector',
          'NotificationTargetPlanningRecall',
          'NotificationTargetProblem',
          'NotificationTargetProject',
          'NotificationTargetProjectTask',
          'NotificationTargetReservation',
          'Change_Project',
          'NotificationTargetSoftwareLicense',
          'NotificationTargetTicket',
          'NotificationTargetUser',
          'NotificationTemplateTranslation',
          'OperatingSystem',
          'OperatingSystemServicePack',
          'OperatingSystemVersion',
          'PeripheralModel',
          'PeripheralType',
          'PhoneModel',
          'Change_Supplier',
          'PhonePowerSupply',
          'PhoneType',
          'PlanningRecall',
          'PrinterModel',
          'PrinterType',
          'Problem',
          'Problem_Supplier',
          'Problem_Ticket',
          'Problem_User',
          'ProblemCost',
          'Change_Ticket',
          'ProblemTask',
          'Profile_Reminder',
          'Profile_RSSFeed',
          'Profile_User',
          'ProfileRight',
          'ProjectCost',
          'ProjectState',
          'ProjectTask',
          'ProjectTask_Ticket',
          'ProjectTaskTeam',
          'Change_User',
          'ProjectTaskType',
          'ProjectTeam',
          'ProjectType',
          'RegisteredID',
          'Reminder_User',
          'RequestType',
          'Reservation',
          'ReservationItem',
          'RSSFeed_User',
          'RuleAction',
          'ChangeCost',
          'RuleCriteria',
          'RuleDictionnaryComputerModel',
          'RuleDictionnaryComputerModelCollection',
          'RuleDictionnaryComputerType',
          'RuleDictionnaryComputerTypeCollection',
          'RuleDictionnaryDropdown',
          'RuleDictionnaryDropdownCollection',
          'RuleDictionnaryManufacturer',
          'RuleDictionnaryManufacturerCollection',
          'RuleDictionnaryMonitorModel',
          'BlacklistedMailContent',
          'ChangeTask',
          'RuleDictionnaryMonitorModelCollection',
          'RuleDictionnaryMonitorType',
          'RuleDictionnaryMonitorTypeCollection',
          'RuleDictionnaryNetworkEquipmentModel',
          'RuleDictionnaryNetworkEquipmentModelCollection',
          'RuleDictionnaryNetworkEquipmentType',
          'RuleDictionnaryNetworkEquipmentTypeCollection',
          'RuleDictionnaryOperatingSystem',
          'RuleDictionnaryOperatingSystemCollection',
          'RuleDictionnaryOperatingSystemServicePack',
          'ChangeValidation',
          'RuleDictionnaryOperatingSystemServicePackCollection',
          'RuleDictionnaryOperatingSystemVersion',
          'RuleDictionnaryOperatingSystemVersionCollection',
          'RuleDictionnaryPeripheralModel',
          'RuleDictionnaryPeripheralModelCollection',
          'RuleDictionnaryPeripheralType',
          'RuleDictionnaryPeripheralTypeCollection',
          'RuleDictionnaryPhoneModel',
          'RuleDictionnaryPhoneModelCollection',
          'RuleDictionnaryPhoneType',
          'CommonDBChild',
          'RuleDictionnaryPhoneTypeCollection',
          'RuleDictionnaryPrinter',
          'RuleDictionnaryPrinterCollection',
          'RuleDictionnaryPrinterModel',
          'RuleDictionnaryPrinterModelCollection',
          'RuleDictionnaryPrinterType',
          'RuleDictionnaryPrinterTypeCollection',
          'RuleDictionnarySoftware',
          'RuleDictionnarySoftwareCollection',
          'RuleImportComputer',
          'CommonDBRelation',
          'RuleImportComputerCollection',
          'RuleImportEntity',
          'RuleImportEntityCollection',
          'RuleMailCollector',
          'RuleMailCollectorCollection',
          'RuleRight',
          'RuleRightCollection',
          'RuleRightParameter',
          'RuleSoftwareCategory',
          'RuleSoftwareCategoryCollection',
          'CommonDevice',
          'RuleTicket',
          'RuleTicketCollection',
          'SlaLevel',
          'SlaLevelAction',
          'SlaLevelCriteria',
          'SoftwareCategory',
          'SoftwareLicenseType',
          'SoftwareVersion',
          'SolutionTemplate',
          'SolutionType',
          'CommonImplicitTreeDropdown',
          'SsoVariable',
          'State',
          'Supplier_Ticket',
          'SupplierType',
          'TaskCategory',
          'Ticket',
          'Ticket_Ticket',
          'Ticket_User',
          'TicketCost',
          'TicketRecurrent',
          'CommonITILActor',
          'TicketTask',
          'TicketTemplate',
          'TicketTemplateHiddenField',
          'TicketTemplateMandatoryField',
          'TicketTemplatePredefinedField',
          'TicketValidation',
          'UserCategory',
          'UserEmail',
          'UserTitle',
          'VirtualMachineState',
          'CommonITILCost',
          'VirtualMachineSystem',
          'VirtualMachineType',
          'Vlan',
          'WifiNetwork',
          'CommonITILValidation',
          'CommonTreeDropdown',
          'Bookmark_User',
          'Computer_Item',
          'Computer_SoftwareLicense',
          'Computer_SoftwareVersion',
          'ComputerDisk',
          'ComputerModel',
          'ComputerType',
          'ComputerVirtualMachine',
          'Consumable',
          'ConsumableItemType',
          'Contact_Supplier',
          'Budget',
          'ContactType',
          'Contract_Item',
          'Contract_Supplier',
          'ContractCost',
          'ContractType',
          'DeviceCase',
          'DeviceCaseType',
          'DeviceControl',
          'DeviceDrive',
          'DeviceGraphicCard',
          'Calendar',
          'DeviceHardDrive',
          'DeviceMemory',
          'DeviceMemoryType',
          'DeviceMotherboard',
          'DeviceNetworkCard',
          'DevicePci',
          'DevicePowerSupply',
          'DeviceProcessor',
          'DeviceSoundCard',
          'Document_Item',
          'Calendar_Holiday',
          'DocumentCategory',
          'DocumentType',
          'Domain',
          'DropdownTranslation',
          'Entity',
          'Entity_KnowbaseItem',
          'Entity_Reminder',
          'Entity_RSSFeed',
          'Fieldblacklist',
          'FieldUnicity',
          'CalendarSegment',
          'Filesystem',
          'FQDN',
          'FQDNLabel',
          'Group',
          'Group_KnowbaseItem',
          'Group_Problem',
          'Group_Reminder',
          'Group_RSSFeed',
          'Group_Ticket',
          'Group_User',
          'Cartridge',
          'Holiday',
          'Infocom',
          'InterfaceType',
          'IPAddress',
          'IPAddress_IPNetwork',
          'IPNetmask',
          'IPNetwork',
          'IPNetwork_Vlan',
          'Item_DeviceCase',
          'Item_DeviceControl',
          'CartridgeItem_PrinterModel',
          'Item_DeviceDrive',
          'Item_DeviceGraphicCard',
          'Item_DeviceHardDrive',
          'Item_DeviceMemory',
          'Item_DeviceMotherboard',
          'Item_DeviceNetworkCard',
          'Item_DevicePci',
          'Item_DevicePowerSupply',
          'Item_DeviceProcessor',
          'Item_Devices'];
        var found = itemtypes.indexOf(itemtype);
        if (found === -1) {
          return false;
        } else {
          return true;
        }
      }
      function validRange(range) {
        var pattern = new RegExp('/^\d+-\d+|\*$/');
        return pattern.test(range);
      }
      return {
        SetValidateItemType: function (aBoolValue){
          validateItemType = aBoolValue;
        },
        initsession: function (url, authorization) {
          var responseDefer = $q.defer();
          var headers = {};
          headers['Content-Type'] = 'application/json';
          if (!validURL(url)) {
            throw new Error(errorMsg.invalid_url);
          } else {
            apiUrl = url.toConcatSlash();
          }
          if (!authorization) {
            throw new Error(errorMsg.invalid_authorization);
          }
          if (authorization.basic) {
            headers.Authorization = 'Basic ' + window.btoa(authorization.login + ':' + authorization.password);
          }
          if (authorization.user_token) {
            headers.Authorization = 'user_token ' + authorization.user_token;
          }
          if (authorization.app_token) {
            headers['App-Token'] = authorization.app_token;
            appToken = authorization.app_token;
          }
          $http({
            method: 'GET',
            url: apiUrl + endpoints.initsession,
            headers: headers,
            data: {},
          }).success(function (resp) {
            sessionToken = resp.data.session_token;
            responseDefer.resolve(resp);
          }).error(function (error) {
            responseDefer.reject(error);
          });
          return responseDefer.promise;
        },
        killsession: function () {
          var responseDefer = $q.defer();
          var headers = {};
          headers['Content-Type'] = 'application/json';
          headers['Session-Token'] = this.sessionToken;
          if (appToken) {
            headers['App-Token'] = this.AppToken;
          }
          $http({
            method: 'GET',
            url: apiUrl + endpoints.killsession,
            headers: headers,
            data: {},
          }).success(function () {
            responseDefer.resolve();
          }).error(function (error) {
            responseDefer.reject(error);
          });
          return responseDefer.promise;
        },
        getMyProfiles: function () { },
        getActiveProfile: function () { },
        changeActiveProfile: function () { },
        getMyEntities: function () { },
        getActiveEntities: function () { },
        changeActiveEntities: function () { },
        getFullSession: function () { },
        getAnItem: function () { },
        getAllItems: function (itemtype, range) {
          var responseDefer = $q.defer();
          if (!validItemType(itemtype) && this.validateItemType) {
            throw new Error(errorMsg.invalid_url);
          }
          if (range) {
            if (!validRange(range)) {
              throw new Error(errorMsg.invalid_range);
            }
          }
          $http({
            method: 'GET',
            url: apiUrl.toConcatSlash() + itemtype,
            params: {
              range: range ? range : maxRange
            },
            data: {},
          }).success(function (resp) {
            responseDefer.resolve(resp);
          }).error(function (error) {
            responseDefer.reject(error);
          });
          return responseDefer.promise;
        },
        getSubItems: function () { },
        getMultipleItems: function () { },
        listSearchOptions: function () { },
        searchItems: function () { },
        addItems: function () { },
        updateItems: function () { },
        deleteItems: function () { }
      };
    });
})();
