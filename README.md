# ngGLPi

[![Greenkeeper badge](https://badges.greenkeeper.io/ajsb85/angular-glpi.svg)](https://greenkeeper.io/)

Bower component for using AngularJS with GLPi API REST

## Usage

1. `bower install angular-glpi`.
1. Include the `service.js` script, and this script's dependencies are included in your app.
1. Add `ngGLPi` as a module dependency to your app.

## List of functions

* GLPi.initsession()
* GLPi.killsession()
* GLPi.getMyProfiles()
* GLPi.getActiveProfile()
* GLPi.changeActiveProfile()
* GLPi.getMyEntities()
* GLPi.getActiveEntities()
* GLPi.changeActiveEntities()
* GLPi.getFullSession()
* GLPi.getAnTtem()
* GLPi.getAllUtems()
* GLPi.getSubItems()
* GLPi.getMultipleItems()
* GLPi.listSearchOptions()
* GLPi.searchItems()
* GLPi.addItems()
* GLPi.updateItems()
* GLPi.deleteItems()

## List itemtypes

* Alert
* AuthLDAP
* Computer
* Config
* ConsumableItem
* Contact
* Contract
* CronTask
* CronTaskLog
* DBConnection
* DisplayPreference
* Document
* AuthLdapReplicate
* Event
* KnowbaseItem
* Link
* Log
* MailCollector
* Monitor
* NetworkEquipment
* Notification
* NotificationEvent
* NotificationMailSetting
* AuthMail
* NotificationTemplate
* NotImportedEmail
* Peripheral
* Phone
* Plugin
* Printer
* Profile
* Project
* QueuedMail
* Reminder
* Bookmark
* RSSFeed
* Rule
* RuleCollection
* SLA
* SlaLevel_Ticket
* Software
* SoftwareLicense
* Supplier
* TicketFollowup
* TicketSatisfaction
* CartridgeItem
* Transfer
* User
* CommonDBConnexity
* CommonDropdown
* CommonITILObject
* CommonITILTask
* AutoUpdateSystem
* Blacklist
* CartridgeItemType
* Item_DeviceSoundCard
* Item_Problem
* Item_Project
* Item_Ticket
* ITILCategory
* KnowbaseItem_Profile
* KnowbaseItem_User
* KnowbaseItemCategory
* KnowbaseItemTranslation
* Link_Itemtype
* Change
* Location
* Manufacturer
* MonitorModel
* MonitorType
* Netpoint
* Network
* NetworkAlias
* NetworkEquipmentFirmware
* NetworkEquipmentModel
* NetworkEquipmentType
* Change_Group
* NetworkInterface
* NetworkName
* NetworkPort
* NetworkPort_NetworkPort
* NetworkPort_Vlan
* NetworkPortAggregate
* NetworkPortAlias
* NetworkPortDialup
* NetworkPortEthernet
* NetworkPortInstantiation
* Change_Item
* NetworkPortLocal
* NetworkPortMigration
* NetworkPortWifi
* Notepad
* NotificationTarget
* NotificationTargetCartridgeItem
* NotificationTargetChange
* NotificationTargetCommonITILObject
* NotificationTargetConsumableItem
* NotificationTargetContract
* Change_Problem
* NotificationTargetCrontask
* NotificationTargetDBConnection
* NotificationTargetFieldUnicity
* NotificationTargetInfocom
* NotificationTargetMailCollector
* NotificationTargetPlanningRecall
* NotificationTargetProblem
* NotificationTargetProject
* NotificationTargetProjectTask
* NotificationTargetReservation
* Change_Project
* NotificationTargetSoftwareLicense
* NotificationTargetTicket
* NotificationTargetUser
* NotificationTemplateTranslation
* OperatingSystem
* OperatingSystemServicePack
* OperatingSystemVersion
* PeripheralModel
* PeripheralType
* PhoneModel
* Change_Supplier
* PhonePowerSupply
* PhoneType
* PlanningRecall
* PrinterModel
* PrinterType
* Problem
* Problem_Supplier
* Problem_Ticket
* Problem_User
* ProblemCost
* Change_Ticket
* ProblemTask
* Profile_Reminder
* Profile_RSSFeed
* Profile_User
* ProfileRight
* ProjectCost
* ProjectState
* ProjectTask
* ProjectTask_Ticket
* ProjectTaskTeam
* Change_User
* ProjectTaskType
* ProjectTeam
* ProjectType
* RegisteredID
* Reminder_User
* RequestType
* Reservation
* ReservationItem
* RSSFeed_User
* RuleAction
* ChangeCost
* RuleCriteria
* RuleDictionnaryComputerModel
* RuleDictionnaryComputerModelCollection
* RuleDictionnaryComputerType
* RuleDictionnaryComputerTypeCollection
* RuleDictionnaryDropdown
* RuleDictionnaryDropdownCollection
* RuleDictionnaryManufacturer
* RuleDictionnaryManufacturerCollection
* RuleDictionnaryMonitorModel
* BlacklistedMailContent
* ChangeTask
* RuleDictionnaryMonitorModelCollection
* RuleDictionnaryMonitorType
* RuleDictionnaryMonitorTypeCollection
* RuleDictionnaryNetworkEquipmentModel
* RuleDictionnaryNetworkEquipmentModelCollection
* RuleDictionnaryNetworkEquipmentType
* RuleDictionnaryNetworkEquipmentTypeCollection
* RuleDictionnaryOperatingSystem
* RuleDictionnaryOperatingSystemCollection
* RuleDictionnaryOperatingSystemServicePack
* ChangeValidation
* RuleDictionnaryOperatingSystemServicePackCollection
* RuleDictionnaryOperatingSystemVersion
* RuleDictionnaryOperatingSystemVersionCollection
* RuleDictionnaryPeripheralModel
* RuleDictionnaryPeripheralModelCollection
* RuleDictionnaryPeripheralType
* RuleDictionnaryPeripheralTypeCollection
* RuleDictionnaryPhoneModel
* RuleDictionnaryPhoneModelCollection
* RuleDictionnaryPhoneType
* CommonDBChild
* RuleDictionnaryPhoneTypeCollection
* RuleDictionnaryPrinter
* RuleDictionnaryPrinterCollection
* RuleDictionnaryPrinterModel
* RuleDictionnaryPrinterModelCollection
* RuleDictionnaryPrinterType
* RuleDictionnaryPrinterTypeCollection
* RuleDictionnarySoftware
* RuleDictionnarySoftwareCollection
* RuleImportComputer
* CommonDBRelation
* RuleImportComputerCollection
* RuleImportEntity
* RuleImportEntityCollection
* RuleMailCollector
* RuleMailCollectorCollection
* RuleRight
* RuleRightCollection
* RuleRightParameter
* RuleSoftwareCategory
* RuleSoftwareCategoryCollection
* CommonDevice
* RuleTicket
* RuleTicketCollection
* SlaLevel
* SlaLevelAction
* SlaLevelCriteria
* SoftwareCategory
* SoftwareLicenseType
* SoftwareVersion
* SolutionTemplate
* SolutionType
* CommonImplicitTreeDropdown
* SsoVariable
* State
* Supplier_Ticket
* SupplierType
* TaskCategory
* Ticket
* Ticket_Ticket
* Ticket_User
* TicketCost
* TicketRecurrent
* CommonITILActor
* TicketTask
* TicketTemplate
* TicketTemplateHiddenField
* TicketTemplateMandatoryField
* TicketTemplatePredefinedField
* TicketValidation
* UserCategory
* UserEmail
* UserTitle
* VirtualMachineState
* CommonITILCost
* VirtualMachineSystem
* VirtualMachineType
* Vlan
* WifiNetwork
* CommonITILValidation
* CommonTreeDropdown
* Bookmark_User
* Computer_Item
* Computer_SoftwareLicense
* Computer_SoftwareVersion
* ComputerDisk
* ComputerModel
* ComputerType
* ComputerVirtualMachine
* Consumable
* ConsumableItemType
* Contact_Supplier
* Budget
* ContactType
* Contract_Item
* Contract_Supplier
* ContractCost
* ContractType
* DeviceCase
* DeviceCaseType
* DeviceControl
* DeviceDrive
* DeviceGraphicCard
* Calendar
* DeviceHardDrive
* DeviceMemory
* DeviceMemoryType
* DeviceMotherboard
* DeviceNetworkCard
* DevicePci
* DevicePowerSupply
* DeviceProcessor
* DeviceSoundCard
* Document_Item
* Calendar_Holiday
* DocumentCategory
* DocumentType
* Domain
* DropdownTranslation
* Entity
* Entity_KnowbaseItem
* Entity_Reminder
* Entity_RSSFeed
* Fieldblacklist
* FieldUnicity
* CalendarSegment
* Filesystem
* FQDN
* FQDNLabel
* Group
* Group_KnowbaseItem
* Group_Problem
* Group_Reminder
* Group_RSSFeed
* Group_Ticket
* Group_User
* Cartridge
* Holiday
* Infocom
* InterfaceType
* IPAddress
* IPAddress_IPNetwork
* IPNetmask
* IPNetwork
* IPNetwork_Vlan
* Item_DeviceCase
* Item_DeviceControl
* CartridgeItem_PrinterModel
* Item_DeviceDrive
* Item_DeviceGraphicCard
* Item_DeviceHardDrive
* Item_DeviceMemory
* Item_DeviceMotherboard
* Item_DeviceNetworkCard
* Item_DevicePci
* Item_DevicePowerSupply
* Item_DeviceProcessor
* Item_Devices

## License

GPL v3.0
