const _0x1d3739=_0xbb95;(function(_0x2df7dc,_0x2dc303){const _0x227c7f=_0xbb95,_0x542db5=_0x2df7dc();while(!![]){try{const _0xfdcbb4=parseInt(_0x227c7f(0x1eb))/0x1+parseInt(_0x227c7f(0x24d))/0x2+-parseInt(_0x227c7f(0x212))/0x3+parseInt(_0x227c7f(0x225))/0x4*(parseInt(_0x227c7f(0x27e))/0x5)+-parseInt(_0x227c7f(0x2b8))/0x6*(parseInt(_0x227c7f(0x1fe))/0x7)+-parseInt(_0x227c7f(0x221))/0x8*(parseInt(_0x227c7f(0x2d7))/0x9)+parseInt(_0x227c7f(0x20a))/0xa;if(_0xfdcbb4===_0x2dc303)break;else _0x542db5['push'](_0x542db5['shift']());}catch(_0x5f3e7b){_0x542db5['push'](_0x542db5['shift']());}}}(_0x2ce5,0xc5713));const _0x11edf6=(function(){let _0x1fb313=!![];return function(_0x22e82d,_0x5aa301){const _0x40060e=_0x1fb313?function(){const _0x41f538=_0xbb95;if(_0x5aa301){const _0x31db4c=_0x5aa301[_0x41f538(0x27d)](_0x22e82d,arguments);return _0x5aa301=null,_0x31db4c;}}:function(){};return _0x1fb313=![],_0x40060e;};}()),_0xfb619=_0x11edf6(this,function(){const _0x541729=_0xbb95,_0x1fd452={'QWqBM':_0x541729(0x2b5)};return _0xfb619[_0x541729(0x208)]()['search'](_0x1fd452['QWqBM'])[_0x541729(0x208)]()[_0x541729(0x29f)](_0xfb619)[_0x541729(0x273)](_0x541729(0x2b5));});_0xfb619();export const AccessGroupTable={'_meta':{'table':'AccessGroup','primaryKey':'id'},'byMembershipLocationId':{'_meta':{'table':_0x1d3739(0x236),'index':_0x1d3739(0x24a),'primaryKey':_0x1d3739(0x21c)}}};export const AccessGroupAccessPointTable={'_meta':{'table':_0x1d3739(0x290),'primaryKey':'id'},'byAccessGroup':{'_meta':{'table':_0x1d3739(0x290),'index':_0x1d3739(0x23c),'primaryKey':_0x1d3739(0x296)}}};export const AccessPointTable={'_meta':{'table':_0x1d3739(0x28f),'primaryKey':'id'},'byAuthToken':{'_meta':{'table':'AccessPoint','index':_0x1d3739(0x2a0),'primaryKey':'authToken'}},'byLocation':{'_meta':{'table':_0x1d3739(0x28f),'index':'byLocation','primaryKey':_0x1d3739(0x23b)}},'byApiId':{'_meta':{'table':_0x1d3739(0x28f),'index':'byApiId','primaryKey':_0x1d3739(0x2d3)}}};export const AccessPointTimesTable={'_meta':{'table':_0x1d3739(0x257),'primaryKey':'id'},'byDoorAccessPointId':{'_meta':{'table':_0x1d3739(0x257),'index':'byDoorAccessPointId','primaryKey':_0x1d3739(0x23a)}},'byLocationId':{'_meta':{'table':_0x1d3739(0x257),'index':_0x1d3739(0x2af),'primaryKey':_0x1d3739(0x23b)}}};export const ActionNotificationTable={'_meta':{'table':'ActionNotification','primaryKey':'id'},'byNotificationId':{'_meta':{'table':_0x1d3739(0x275),'index':_0x1d3739(0x1f0),'primaryKey':_0x1d3739(0x2b0)}},'byMemberId':{'_meta':{'table':_0x1d3739(0x275),'index':_0x1d3739(0x230),'primaryKey':_0x1d3739(0x241)}}};function _0xbb95(_0x22546f,_0x1998c0){const _0x301cce=_0x2ce5();return _0xbb95=function(_0xfb619,_0x11edf6){_0xfb619=_0xfb619-0x1e9;let _0x2ce5dd=_0x301cce[_0xfb619];return _0x2ce5dd;},_0xbb95(_0x22546f,_0x1998c0);}export const AuditOperationTable={'_meta':{'table':_0x1d3739(0x2c5),'primaryKey':'id'},'byMemberId':{'_meta':{'table':_0x1d3739(0x2c5),'index':'byMemberId','primaryKey':_0x1d3739(0x241),'sortKey':_0x1d3739(0x25f)}}};export const AuditVisitLogTable={'_meta':{'table':'AuditVisitLog','primaryKey':'id'},'byMemberId':{'_meta':{'table':'AuditVisitLog','index':'byMemberId','primaryKey':'memberId','sortKey':'createdAt'}},'byClickedBy':{'_meta':{'table':_0x1d3739(0x235),'index':_0x1d3739(0x255),'primaryKey':_0x1d3739(0x280),'sortKey':'createdAt'}},'byType':{'_meta':{'table':_0x1d3739(0x235),'index':_0x1d3739(0x288),'primaryKey':_0x1d3739(0x22c)}}};export const BatchPaymentTable={'_meta':{'table':_0x1d3739(0x214),'primaryKey':'id'},'byToken':{'_meta':{'table':_0x1d3739(0x214),'index':_0x1d3739(0x248),'primaryKey':_0x1d3739(0x26a)}},'byBrandId':{'_meta':{'table':'BatchPayment','index':_0x1d3739(0x2d2),'primaryKey':_0x1d3739(0x238)}},'byLocationId':{'_meta':{'table':_0x1d3739(0x214),'index':'byLocationId','primaryKey':_0x1d3739(0x23b)}},'byMemberId':{'_meta':{'table':_0x1d3739(0x214),'index':_0x1d3739(0x230),'primaryKey':'memberId'}},'byDebitDate':{'_meta':{'table':_0x1d3739(0x214),'index':_0x1d3739(0x254),'primaryKey':_0x1d3739(0x226),'sortKey':'paymentType'}},'byMemberContractBillingId':{'_meta':{'table':_0x1d3739(0x214),'index':_0x1d3739(0x2d5),'primaryKey':_0x1d3739(0x26e)}},'byBatchId':{'_meta':{'table':'BatchPayment','index':_0x1d3739(0x231),'primaryKey':'batchId','sortKey':_0x1d3739(0x258)}},'byUniqueIdentifier':{'_meta':{'table':_0x1d3739(0x214),'index':_0x1d3739(0x2ce),'primaryKey':_0x1d3739(0x239)}},'byBatchBrandId':{'_meta':{'table':_0x1d3739(0x214),'index':'byBatchBrandId','primaryKey':_0x1d3739(0x200),'sortKey':_0x1d3739(0x258)}}};export const BillingCreditTable={'_meta':{'table':'BillingCredit','primaryKey':'id'},'byMemberContractBillingId':{'_meta':{'table':_0x1d3739(0x282),'index':_0x1d3739(0x2d5),'primaryKey':_0x1d3739(0x26e)}}};export const BrandTable={'_meta':{'table':_0x1d3739(0x266),'primaryKey':'id'},'brandByName':{'_meta':{'table':'Brand','index':_0x1d3739(0x292),'primaryKey':_0x1d3739(0x26f)}}};export const CardNumberTable={'_meta':{'table':_0x1d3739(0x2b9),'primaryKey':'id'},'byCardNumber':{'_meta':{'table':_0x1d3739(0x2b9),'index':'byCardNumber','primaryKey':_0x1d3739(0x2c3)}},'byMemberId':{'_meta':{'table':'CardNumber','index':_0x1d3739(0x230),'primaryKey':'memberId'}}};export const ClassBookingTable={'_meta':{'table':_0x1d3739(0x2b7),'primaryKey':'id'},'byClassScheduleId':{'_meta':{'table':_0x1d3739(0x2b7),'index':_0x1d3739(0x271),'primaryKey':_0x1d3739(0x2a2),'sortKey':_0x1d3739(0x22e)}},'byCasualEmail':{'_meta':{'table':_0x1d3739(0x2b7),'index':_0x1d3739(0x25d),'primaryKey':_0x1d3739(0x249)}},'byMemberId':{'_meta':{'table':_0x1d3739(0x2b7),'index':'byMemberId','primaryKey':_0x1d3739(0x241),'sortKey':_0x1d3739(0x25f)}},'byWaitlistClassScheduleId':{'_meta':{'table':_0x1d3739(0x2b7),'index':_0x1d3739(0x22d),'primaryKey':_0x1d3739(0x29b),'sortKey':_0x1d3739(0x22e)}}};export const ClassInstructorTable={'_meta':{'table':_0x1d3739(0x28a),'primaryKey':'id'}};export const ClassScheduleTable={'_meta':{'table':_0x1d3739(0x21e),'primaryKey':'id'},'byLocationId':{'_meta':{'table':_0x1d3739(0x21e),'index':_0x1d3739(0x2af),'primaryKey':_0x1d3739(0x23b),'sortKey':_0x1d3739(0x286)}},'bySeriesId':{'_meta':{'table':_0x1d3739(0x21e),'index':_0x1d3739(0x2c0),'primaryKey':_0x1d3739(0x23f),'sortKey':_0x1d3739(0x286)}},'byClassTemplateId':{'_meta':{'table':_0x1d3739(0x21e),'index':_0x1d3739(0x223),'primaryKey':_0x1d3739(0x293),'sortKey':_0x1d3739(0x286)}}};export const ClassTemplateTable={'_meta':{'table':'ClassTemplate','primaryKey':'id'},'byBrandId':{'_meta':{'table':'ClassTemplate','index':'byBrandId','primaryKey':'brandId','sortKey':_0x1d3739(0x25f)}}};export const DataStorageTable={'_meta':{'table':'DataStorage','primaryKey':'id'},'byTargetId':{'_meta':{'table':_0x1d3739(0x1fc),'index':_0x1d3739(0x206),'primaryKey':_0x1d3739(0x202),'sortKey':_0x1d3739(0x25f)}}};export const DebtCollectionTable={'_meta':{'table':_0x1d3739(0x1f1),'primaryKey':'id'},'byContractId':{'_meta':{'table':_0x1d3739(0x1f1),'index':_0x1d3739(0x1fa),'primaryKey':_0x1d3739(0x1e9)}},'byBrandId':{'_meta':{'table':'DebtCollection','index':_0x1d3739(0x2d2),'primaryKey':_0x1d3739(0x238),'sortKey':_0x1d3739(0x25f)}},'byGroupId':{'_meta':{'table':_0x1d3739(0x1f1),'index':_0x1d3739(0x246),'primaryKey':_0x1d3739(0x2a9)}},'byLocationId':{'_meta':{'table':_0x1d3739(0x1f1),'index':'byLocationId','primaryKey':_0x1d3739(0x23b),'sortKey':_0x1d3739(0x25f)}},'byMemberId':{'_meta':{'table':'DebtCollection','index':_0x1d3739(0x230),'primaryKey':_0x1d3739(0x241)}},'byLastBillingId':{'_meta':{'table':_0x1d3739(0x1f1),'index':'byLastBillingId','primaryKey':_0x1d3739(0x26b)}},'byMemberContractLogId':{'_meta':{'table':_0x1d3739(0x1f1),'index':'byMemberContractLogId','primaryKey':_0x1d3739(0x2c6)}}};export const DirectDebitLogTable={'_meta':{'table':'DirectDebitLog','primaryKey':'id'},'byMemberContractId':{'_meta':{'table':_0x1d3739(0x2b1),'index':_0x1d3739(0x1ea),'primaryKey':_0x1d3739(0x210),'sortKey':_0x1d3739(0x22c)}},'byStaffId':{'_meta':{'table':_0x1d3739(0x2b1),'index':'byStaffId','primaryKey':_0x1d3739(0x284)}},'byMemberContractBillingId':{'_meta':{'table':_0x1d3739(0x2b1),'index':_0x1d3739(0x2d5),'primaryKey':'billingId','sortKey':'createdAt'}}};export const DoorAccessCodeTable={'_meta':{'table':_0x1d3739(0x244),'primaryKey':'id'},'byLocationId':{'_meta':{'table':_0x1d3739(0x244),'index':_0x1d3739(0x2af),'primaryKey':_0x1d3739(0x23b)}}};export const DoorAccessLogTable={'_meta':{'table':_0x1d3739(0x289),'primaryKey':'id'},'byLocationId':{'_meta':{'table':'DoorAccessLog','index':_0x1d3739(0x2af),'primaryKey':_0x1d3739(0x23b)}},'byCreatedAt':{'_meta':{'table':'DoorAccessLog','index':_0x1d3739(0x227),'primaryKey':_0x1d3739(0x25f)}},'byMember':{'_meta':{'table':'DoorAccessLog','index':_0x1d3739(0x2ae),'primaryKey':_0x1d3739(0x241),'sortKey':_0x1d3739(0x25f)}},'byState':{'_meta':{'table':'DoorAccessLog','index':_0x1d3739(0x2bc),'primaryKey':_0x1d3739(0x279)}}};function _0x2ce5(){const _0x1f19a3=['3904914QwircV','juniorMemberGuardianDetail','BatchPayment','Transaction','featuresById','MemberOutstandingBalanceLog','destination','byVoucherId','byMembershipId','byTokenId','membershipLocationId','state','ClassSchedule','mobileNumber','surname','8mfLPwT','VoucherLocation','byClassTemplateId','Notification','44fIXHTt','debitDate','byCreatedAt','ByMemberId','createdBy','locationFeaturesById','byGroup','type','byWaitlistClassScheduleId','bookedDateTime','permissionId','byMemberId','byBatchId','NicknameSuggestion','membershipId','nickname','AuditVisitLog','AccessGroup','Note','brandId','uniqueIdentifier','accessPointId','locationId','byAccessGroup','FitnessPassportLocation','blockFrom','seriesId','batchPaymentId','memberId','memberByMobile','byStaff','DoorAccessCode','healthQuestionnaireByBrandId','byGroupId','vivaPaymentInformationId','byToken','casualEmail','byMembershipLocationId','hashKey','MemberContractSuspensionLog','3038238KONCKy','SmsResult','byEventType','byBlockTo','byDestination','byBlockFrom','bySender','byDebitDate','byClickedBy','byAction','AccessPointTimes','paymentType','RejectionProcess','email','Group','tokenId','byCasualEmail','MemberActivity','createdAt','QuestionAnswer','byCreatedBy','LocationStudio','VoucherMember','memberBySurname','prospectByEmail','Brand','orderId','byPermission','RoleAndPermission','token','lastBillingId','MemberContractLog','memberByHomeLocationId','memberContractBillingId','name','Feature','byClassScheduleId','VoucherInvitation','search','transactionId','ActionNotification','byBillingCreditId','recordType','startDateTime','locationState','byEmail','dateTime','byTransactionId','apply','122030vklsFV','byName','clickedBy','SmsOutbox','BillingCredit','PaymentGatewayLog','updatedBy','locationId#displayUntil','classScheduleDateTime','suspensionBillingCreditId','byType','DoorAccessLog','ClassInstructor','MemberDevice','memberByAliasId','GeoPoint','Prospect','AccessPoint','AccessGroupAccessPoint','bySuspensionBillingCreditId','brandByName','classTemplateId','MemberRequest','byMemberContractSuspensionId','accessGroupId','PaymentInformation','Membership','LocationAuditOperation','SmsIncoming','waitlistClassScheduleId','byRoleName','locationByState','geohash-index','constructor','byAuthToken','MembershipLocationLog','classScheduleId','byLogType','memberContractSuspensionId','byBatchPaymentId','refundDate','billingId','byRole','groupId','LocationMaintenance','MembershipPaymentType','MemberReceipt','LocationAccessTimes','byMember','byLocationId','notificationId','DirectDebitLog','GroupLocation','byIdentityName','instructorId','(((.+)+)+)+$','MemberBlock','ClassBooking','15984qOUdQe','CardNumber','givenName','byInstructorId','byState','InstructorCredential','MembershipLocation','aliasMemberId','bySeriesId','roleId','SettlementReport','cardNumber','byBillingId','AuditOperation','memberContractLogId','byLocation','suspensionId','voucherCode','MemberContractSuspension','GroupStaff','permissionName','Location','byUniqueIdentifier','MemberContractBilling','joinedDateTime','staffId','byBrandId','apiId','identityName','byMemberContractBillingId','Role','9096723ffBNJC','LocationFeature','MemberContract','contractId','byMemberContractId','1515874wHHzCD','voucherId','logType','consentFormDetail','Permission','byNotificationId','DebtCollection','FitnessPassportRequestLog','Statistics','blockTo','batchId','DoorConnection','RefundTransaction','Member','byOrderId','byContractId','RejectionPayment','DataStorage','memberByName','1757ojWyVO','MembershipActivationDate','batchBrandId','memberDeviceByEmail','targetId','billingCreditId','configurationId','byPermissions','byTargetId','byStartDateTime','toString','displayUntil','4863130GZKcRk','geohash','Voucher','byConfigId','paymentGatewayLogId','byMemberSuspensionId','memberContractId','byCardToken'];_0x2ce5=function(){return _0x1f19a3;};return _0x2ce5();}export const DoorConnectionTable={'_meta':{'table':_0x1d3739(0x1f6),'primaryKey':'id'},'byConfigId':{'_meta':{'table':'DoorConnection','index':_0x1d3739(0x20d),'primaryKey':_0x1d3739(0x204)}}};export const FeatureTable={'_meta':{'table':_0x1d3739(0x270),'primaryKey':'id'},'featuresById':{'_meta':{'table':_0x1d3739(0x270),'index':_0x1d3739(0x216),'primaryKey':'id'}}};export const FitnessPassportLocationTable={'_meta':{'table':_0x1d3739(0x23d),'primaryKey':'id'},'byLocationId':{'_meta':{'table':_0x1d3739(0x23d),'index':_0x1d3739(0x2af),'primaryKey':'locationId'}}};export const FitnessPassportRequestLogTable={'_meta':{'table':'FitnessPassportRequestLog','primaryKey':'id'},'byBrandId':{'_meta':{'table':_0x1d3739(0x1f2),'index':_0x1d3739(0x2d2),'primaryKey':_0x1d3739(0x238)}},'byLocationId':{'_meta':{'table':'FitnessPassportRequestLog','index':_0x1d3739(0x2af),'primaryKey':'locationId'}},'byMemberId':{'_meta':{'table':_0x1d3739(0x1f2),'index':_0x1d3739(0x230),'primaryKey':_0x1d3739(0x241)}},'byFitnessPassportNumber':{'_meta':{'table':_0x1d3739(0x1f2),'index':'byFitnessPassportNumber','primaryKey':'fitnessPassportNumber'}}};export const GeoPointTable={'_meta':{'table':_0x1d3739(0x28d),'primaryKey':_0x1d3739(0x24b),'sortKey':'rangeKey'},'byLocationId':{'_meta':{'table':_0x1d3739(0x28d),'index':'byLocationId','primaryKey':_0x1d3739(0x23b)}},'geohash-index':{'_meta':{'table':_0x1d3739(0x28d),'index':_0x1d3739(0x29e),'primaryKey':_0x1d3739(0x24b),'sortKey':_0x1d3739(0x20b)}}};export const GroupTable={'_meta':{'table':_0x1d3739(0x25b),'primaryKey':'id'},'byName':{'_meta':{'table':_0x1d3739(0x25b),'index':_0x1d3739(0x27f),'primaryKey':_0x1d3739(0x26f)}}};export const GroupLocationTable={'_meta':{'table':_0x1d3739(0x2b2),'primaryKey':'id'},'byGroup':{'_meta':{'table':'GroupLocation','index':_0x1d3739(0x22b),'primaryKey':_0x1d3739(0x2a9)}},'byLocation':{'_meta':{'table':'GroupLocation','index':_0x1d3739(0x2c7),'primaryKey':_0x1d3739(0x23b)}}};export const GroupStaffTable={'_meta':{'table':_0x1d3739(0x2cb),'primaryKey':'id'},'byGroup':{'_meta':{'table':_0x1d3739(0x2cb),'index':_0x1d3739(0x22b),'primaryKey':_0x1d3739(0x2a9)}},'byStaff':{'_meta':{'table':_0x1d3739(0x2cb),'index':_0x1d3739(0x243),'primaryKey':_0x1d3739(0x2d1)}}};export const HealthQuestionnaireTable={'_meta':{'table':'HealthQuestionnaire','primaryKey':'id'},'healthQuestionnaireByBrandId':{'_meta':{'table':'HealthQuestionnaire','index':_0x1d3739(0x245),'primaryKey':_0x1d3739(0x238)}}};export const InstructorCredentialTable={'_meta':{'table':'InstructorCredential','primaryKey':'id'},'byInstructorId':{'_meta':{'table':_0x1d3739(0x2bd),'index':_0x1d3739(0x2bb),'primaryKey':_0x1d3739(0x2b4),'sortKey':_0x1d3739(0x25f)}}};export const LocationTable={'_meta':{'table':_0x1d3739(0x2cd),'primaryKey':'id'},'locationByState':{'_meta':{'table':_0x1d3739(0x2cd),'index':_0x1d3739(0x29d),'primaryKey':_0x1d3739(0x21d)}},'locationByBrand':{'_meta':{'table':'Location','index':'locationByBrand','primaryKey':'brandId'}}};export const LocationAccessTimesTable={'_meta':{'table':'LocationAccessTimes','primaryKey':'id'},'byLocationId':{'_meta':{'table':_0x1d3739(0x2ad),'index':_0x1d3739(0x2af),'primaryKey':_0x1d3739(0x23b),'sortKey':_0x1d3739(0x22c)}}};export const LocationAuditOperationTable={'_meta':{'table':_0x1d3739(0x299),'primaryKey':'id'},'byLocationId':{'_meta':{'table':_0x1d3739(0x299),'index':'byLocationId','primaryKey':_0x1d3739(0x23b)}}};export const LocationFeatureTable={'_meta':{'table':'LocationFeature','primaryKey':'id'},'byLocationId':{'_meta':{'table':_0x1d3739(0x2d8),'index':_0x1d3739(0x2af),'primaryKey':'locationId'}},'locationFeaturesById':{'_meta':{'table':_0x1d3739(0x2d8),'index':_0x1d3739(0x22a),'primaryKey':'id'}}};export const LocationMaintenanceTable={'_meta':{'table':_0x1d3739(0x2aa),'primaryKey':'id'},'byLocationId':{'_meta':{'table':_0x1d3739(0x2aa),'index':_0x1d3739(0x2af),'primaryKey':_0x1d3739(0x23b)}}};export const LocationStudioTable={'_meta':{'table':'LocationStudio','primaryKey':'id'},'byLocationId':{'_meta':{'table':_0x1d3739(0x262),'index':'byLocationId','primaryKey':_0x1d3739(0x23b)}}};export const MemberTable={'_meta':{'table':_0x1d3739(0x1f8),'primaryKey':'memberId'},'byMemberType':{'_meta':{'table':_0x1d3739(0x1f8),'index':'byMemberType','primaryKey':_0x1d3739(0x22c),'sortKey':_0x1d3739(0x2d0)}},'memberByMobile':{'_meta':{'table':_0x1d3739(0x1f8),'index':_0x1d3739(0x242),'primaryKey':_0x1d3739(0x21f)}},'memberByEmail':{'_meta':{'table':_0x1d3739(0x1f8),'index':'memberByEmail','primaryKey':_0x1d3739(0x25a)}},'memberByAliasId':{'_meta':{'table':_0x1d3739(0x1f8),'index':_0x1d3739(0x28c),'primaryKey':_0x1d3739(0x2bf)}},'memberByHomeLocationId':{'_meta':{'table':_0x1d3739(0x1f8),'index':_0x1d3739(0x26d),'primaryKey':'homeLocationId'}},'memberByNickname':{'_meta':{'table':_0x1d3739(0x1f8),'index':'memberByNickname','primaryKey':_0x1d3739(0x234)}},'memberBySurname':{'_meta':{'table':_0x1d3739(0x1f8),'index':_0x1d3739(0x264),'primaryKey':_0x1d3739(0x220)}},'memberByBrandId':{'_meta':{'table':'Member','index':'memberByBrandId','primaryKey':_0x1d3739(0x238),'sortKey':_0x1d3739(0x22c)}},'memberByName':{'_meta':{'table':_0x1d3739(0x1f8),'index':_0x1d3739(0x1fd),'primaryKey':_0x1d3739(0x2ba)}}};export const MemberActivityTable={'_meta':{'table':_0x1d3739(0x25e),'primaryKey':'id'},'byMemberId':{'_meta':{'table':'MemberActivity','index':_0x1d3739(0x230),'primaryKey':'memberId','sortKey':_0x1d3739(0x25f)}}};export const MemberBlockTable={'_meta':{'table':_0x1d3739(0x2b6),'primaryKey':'id'},'byBlockTo':{'_meta':{'table':_0x1d3739(0x2b6),'index':_0x1d3739(0x250),'primaryKey':_0x1d3739(0x1f4)}},'byLocationId':{'_meta':{'table':_0x1d3739(0x2b6),'index':_0x1d3739(0x2af),'primaryKey':_0x1d3739(0x23b),'sortKey':_0x1d3739(0x277)}},'byMemberId':{'_meta':{'table':_0x1d3739(0x2b6),'index':'byMemberId','primaryKey':'memberId'}},'byBlockFrom':{'_meta':{'table':_0x1d3739(0x2b6),'index':_0x1d3739(0x252),'primaryKey':_0x1d3739(0x23e),'sortKey':_0x1d3739(0x1f4)}}};export const MemberContractTable={'_meta':{'table':'MemberContract','primaryKey':'id'},'byMembershipId':{'_meta':{'table':'MemberContract','index':'byMembershipId','primaryKey':_0x1d3739(0x233)}},'byMembershipLocationId':{'_meta':{'table':_0x1d3739(0x2d9),'index':_0x1d3739(0x24a),'primaryKey':'membershipLocationId'}},'byBrandId':{'_meta':{'table':_0x1d3739(0x2d9),'index':_0x1d3739(0x2d2),'primaryKey':_0x1d3739(0x238)}},'byLocationId':{'_meta':{'table':_0x1d3739(0x2d9),'index':_0x1d3739(0x2af),'primaryKey':_0x1d3739(0x23b)}},'byMemberId':{'_meta':{'table':_0x1d3739(0x2d9),'index':_0x1d3739(0x230),'primaryKey':'memberId'}},'byStartDateTime':{'_meta':{'table':_0x1d3739(0x2d9),'index':_0x1d3739(0x207),'primaryKey':_0x1d3739(0x278)}}};export const MemberContractBillingTable={'_meta':{'table':'MemberContractBilling','primaryKey':'id'},'byMemberContractId':{'_meta':{'table':_0x1d3739(0x2cf),'index':_0x1d3739(0x1ea),'primaryKey':_0x1d3739(0x210)}},'byMembershipId':{'_meta':{'table':_0x1d3739(0x2cf),'index':_0x1d3739(0x21a),'primaryKey':_0x1d3739(0x233)}},'byMembershipLocationId':{'_meta':{'table':'MemberContractBilling','index':_0x1d3739(0x24a),'primaryKey':_0x1d3739(0x21c)}},'byBrandId':{'_meta':{'table':_0x1d3739(0x2cf),'index':'byBrandId','primaryKey':_0x1d3739(0x238)}},'byLocationId':{'_meta':{'table':_0x1d3739(0x2cf),'index':_0x1d3739(0x2af),'primaryKey':'locationId','sortKey':'debitDate'}},'byMemberId':{'_meta':{'table':'MemberContractBilling','index':_0x1d3739(0x230),'primaryKey':_0x1d3739(0x241)}},'byDebitDate':{'_meta':{'table':'MemberContractBilling','index':_0x1d3739(0x254),'primaryKey':_0x1d3739(0x226)}}};export const MemberContractLogTable={'_meta':{'table':_0x1d3739(0x26c),'primaryKey':'id'},'byLogType':{'_meta':{'table':_0x1d3739(0x26c),'index':_0x1d3739(0x2a3),'primaryKey':_0x1d3739(0x1ed),'sortKey':_0x1d3739(0x25f)}},'byMemberContractId':{'_meta':{'table':'MemberContractLog','index':_0x1d3739(0x1ea),'primaryKey':_0x1d3739(0x210)}},'byMemberId':{'_meta':{'table':'MemberContractLog','index':_0x1d3739(0x230),'primaryKey':_0x1d3739(0x241),'sortKey':_0x1d3739(0x1ed)}}};export const MemberContractSuspensionTable={'_meta':{'table':'MemberContractSuspension','primaryKey':'id'},'byMemberContractId':{'_meta':{'table':_0x1d3739(0x2ca),'index':_0x1d3739(0x1ea),'primaryKey':_0x1d3739(0x210)}},'byLocationId':{'_meta':{'table':'MemberContractSuspension','index':_0x1d3739(0x2af),'primaryKey':_0x1d3739(0x23b)}},'byMemberId':{'_meta':{'table':_0x1d3739(0x2ca),'index':'byMemberId','primaryKey':_0x1d3739(0x241),'sortKey':_0x1d3739(0x25f)}}};export const MemberContractSuspensionLogTable={'_meta':{'table':_0x1d3739(0x24c),'primaryKey':'id'},'byMemberContractId':{'_meta':{'table':_0x1d3739(0x24c),'index':'byMemberContractId','primaryKey':_0x1d3739(0x1e9)}},'byMemberId':{'_meta':{'table':_0x1d3739(0x24c),'index':'byMemberId','primaryKey':_0x1d3739(0x241)}},'byMemberSuspensionId':{'_meta':{'table':'MemberContractSuspensionLog','index':_0x1d3739(0x20f),'primaryKey':_0x1d3739(0x2c8)}}};export const MemberDeviceTable={'_meta':{'table':_0x1d3739(0x28b),'primaryKey':'id'},'byMemberId':{'_meta':{'table':'MemberDevice','index':_0x1d3739(0x230),'primaryKey':_0x1d3739(0x241),'sortKey':'createdAt'}},'memberDeviceByEmail':{'_meta':{'table':_0x1d3739(0x28b),'index':_0x1d3739(0x201),'primaryKey':_0x1d3739(0x25a),'sortKey':_0x1d3739(0x25f)}}};export const MemberOutstandingBalanceLogTable={'_meta':{'table':_0x1d3739(0x217),'primaryKey':'id'},'byMemberContractId':{'_meta':{'table':'MemberOutstandingBalanceLog','index':_0x1d3739(0x1ea),'primaryKey':'memberContractId'}},'byAction':{'_meta':{'table':'MemberOutstandingBalanceLog','index':_0x1d3739(0x256),'primaryKey':'action','sortKey':_0x1d3739(0x25f)}},'byLocationId':{'_meta':{'table':_0x1d3739(0x217),'index':'byLocationId','primaryKey':_0x1d3739(0x23b)}},'byMemberId':{'_meta':{'table':'MemberOutstandingBalanceLog','index':_0x1d3739(0x230),'primaryKey':'memberId'}}};export const MemberReceiptTable={'_meta':{'table':_0x1d3739(0x2ac),'primaryKey':'id'},'byBatchPaymentId':{'_meta':{'table':'MemberReceipt','index':_0x1d3739(0x2a5),'primaryKey':'batchPaymentId'}},'byContractId':{'_meta':{'table':_0x1d3739(0x2ac),'index':'byContractId','primaryKey':_0x1d3739(0x1e9),'sortKey':'createdAt'}},'byBillingId':{'_meta':{'table':_0x1d3739(0x2ac),'index':_0x1d3739(0x2c4),'primaryKey':_0x1d3739(0x2a7)}},'byLocationId':{'_meta':{'table':_0x1d3739(0x2ac),'index':_0x1d3739(0x2af),'primaryKey':_0x1d3739(0x23b)}},'byMemberId':{'_meta':{'table':_0x1d3739(0x2ac),'index':_0x1d3739(0x230),'primaryKey':_0x1d3739(0x241),'sortKey':_0x1d3739(0x25f)}},'byTransactionId':{'_meta':{'table':_0x1d3739(0x2ac),'index':_0x1d3739(0x27c),'primaryKey':_0x1d3739(0x274)}}};export const MemberRequestTable={'_meta':{'table':_0x1d3739(0x294),'primaryKey':'id'},'byMemberId':{'_meta':{'table':'MemberRequest','index':'byMemberId','primaryKey':'memberId'}}};export const MembershipTable={'_meta':{'table':_0x1d3739(0x298),'primaryKey':'id'},'byBrandId':{'_meta':{'table':_0x1d3739(0x298),'index':_0x1d3739(0x2d2),'primaryKey':_0x1d3739(0x238)}}};export const MembershipActivationDateTable={'_meta':{'table':_0x1d3739(0x1ff),'primaryKey':'id'},'byMembershipId':{'_meta':{'table':_0x1d3739(0x1ff),'index':_0x1d3739(0x21a),'primaryKey':'membershipId'}}};export const MembershipLocationTable={'_meta':{'table':_0x1d3739(0x2be),'primaryKey':'id'},'byMembershipId':{'_meta':{'table':'MembershipLocation','index':_0x1d3739(0x21a),'primaryKey':'membershipId'}},'byLocationId':{'_meta':{'table':_0x1d3739(0x2be),'index':_0x1d3739(0x2af),'primaryKey':_0x1d3739(0x23b)}}};export const MembershipLocationLogTable={'_meta':{'table':_0x1d3739(0x2a1),'primaryKey':'id'},'byMembership':{'_meta':{'table':_0x1d3739(0x2a1),'index':'byMembership','primaryKey':_0x1d3739(0x233)}},'byMembershipLocationId':{'_meta':{'table':_0x1d3739(0x2a1),'index':'byMembershipLocationId','primaryKey':_0x1d3739(0x21c)}},'byLocationId':{'_meta':{'table':_0x1d3739(0x2a1),'index':_0x1d3739(0x2af),'primaryKey':_0x1d3739(0x23b)}},'byCreatedBy':{'_meta':{'table':_0x1d3739(0x2a1),'index':_0x1d3739(0x261),'primaryKey':_0x1d3739(0x229)}}};export const MembershipPaymentTypeTable={'_meta':{'table':_0x1d3739(0x2ab),'primaryKey':'id'},'byMembershipId':{'_meta':{'table':_0x1d3739(0x2ab),'index':_0x1d3739(0x21a),'primaryKey':_0x1d3739(0x233)}}};export const NicknameSuggestionTable={'_meta':{'table':_0x1d3739(0x232),'primaryKey':'id'}};export const NoteTable={'_meta':{'table':_0x1d3739(0x237),'primaryKey':'id'},'byMember':{'_meta':{'table':_0x1d3739(0x237),'index':_0x1d3739(0x2ae),'primaryKey':'memberId','sortKey':_0x1d3739(0x25f)}}};export const NotificationTable={'_meta':{'table':'Notification','primaryKey':'id'},'byBrandId':{'_meta':{'table':'Notification','index':_0x1d3739(0x2d2),'primaryKey':'brandId','sortKey':_0x1d3739(0x25f)}},'byLocationId':{'_meta':{'table':_0x1d3739(0x224),'index':_0x1d3739(0x2af),'primaryKey':_0x1d3739(0x23b),'sortKey':_0x1d3739(0x25f)}},'byMemberId':{'_meta':{'table':_0x1d3739(0x224),'index':'byMemberId','primaryKey':_0x1d3739(0x241),'sortKey':_0x1d3739(0x209)}},'byEmail':{'_meta':{'table':_0x1d3739(0x224),'index':_0x1d3739(0x27a),'primaryKey':'email','sortKey':_0x1d3739(0x209)}},'byEventType':{'_meta':{'table':_0x1d3739(0x224),'index':_0x1d3739(0x24f),'primaryKey':'eventType','sortKey':_0x1d3739(0x285)}}};export const PaymentGatewayLogTable={'_meta':{'table':_0x1d3739(0x283),'primaryKey':'id'},'byMemberContractId':{'_meta':{'table':_0x1d3739(0x283),'index':_0x1d3739(0x1ea),'primaryKey':_0x1d3739(0x210)}},'bySuspensionBillingCreditId':{'_meta':{'table':_0x1d3739(0x283),'index':_0x1d3739(0x291),'primaryKey':_0x1d3739(0x287)}},'byBillingId':{'_meta':{'table':_0x1d3739(0x283),'index':'byBillingId','primaryKey':_0x1d3739(0x2a7)}},'byMemberId':{'_meta':{'table':'PaymentGatewayLog','index':_0x1d3739(0x230),'primaryKey':'memberId','sortKey':'requestedAt'}},'byTransactionLogId':{'_meta':{'table':'PaymentGatewayLog','index':'byTransactionLogId','primaryKey':'transactionLogId'}},'byMemberContractSuspensionId':{'_meta':{'table':'PaymentGatewayLog','index':_0x1d3739(0x295),'primaryKey':_0x1d3739(0x2a4)}}};export const PaymentInformationTable={'_meta':{'table':_0x1d3739(0x297),'primaryKey':'id'},'byVivaPaymentInformationId':{'_meta':{'table':'PaymentInformation','index':'byVivaPaymentInformationId','primaryKey':_0x1d3739(0x247)}},'byTokenId':{'_meta':{'table':'PaymentInformation','index':_0x1d3739(0x21b),'primaryKey':_0x1d3739(0x25c)}},'byMemberId':{'_meta':{'table':_0x1d3739(0x297),'index':_0x1d3739(0x230),'primaryKey':_0x1d3739(0x241)}},'byCardToken':{'_meta':{'table':_0x1d3739(0x297),'index':_0x1d3739(0x211),'primaryKey':'cardToken'}}};export const PermissionTable={'_meta':{'table':_0x1d3739(0x1ef),'primaryKey':'id'},'byPermissions':{'_meta':{'table':_0x1d3739(0x1ef),'index':_0x1d3739(0x205),'primaryKey':_0x1d3739(0x2cc)}}};export const ProspectTable={'_meta':{'table':_0x1d3739(0x28e),'primaryKey':'id'},'prospectByEmail':{'_meta':{'table':_0x1d3739(0x28e),'index':_0x1d3739(0x265),'primaryKey':_0x1d3739(0x25a)}},'byMemberId':{'_meta':{'table':_0x1d3739(0x28e),'index':_0x1d3739(0x230),'primaryKey':_0x1d3739(0x241)}}};export const QuestionAnswerTable={'_meta':{'table':_0x1d3739(0x260),'primaryKey':'id'},'byMemberId':{'_meta':{'table':_0x1d3739(0x260),'index':_0x1d3739(0x230),'primaryKey':_0x1d3739(0x241)}}};export const RefundTransactionTable={'_meta':{'table':'RefundTransaction','primaryKey':'id'},'byBrandId':{'_meta':{'table':_0x1d3739(0x1f7),'index':_0x1d3739(0x2d2),'primaryKey':'brandId','sortKey':'refundDate'}},'byLocationId':{'_meta':{'table':_0x1d3739(0x1f7),'index':_0x1d3739(0x2af),'primaryKey':_0x1d3739(0x23b),'sortKey':_0x1d3739(0x2a6)}},'byMemberId':{'_meta':{'table':'RefundTransaction','index':_0x1d3739(0x230),'primaryKey':_0x1d3739(0x241),'sortKey':_0x1d3739(0x25f)}},'byMemberContractBillingId':{'_meta':{'table':'RefundTransaction','index':_0x1d3739(0x2d5),'primaryKey':_0x1d3739(0x26e)}}};export const RejectionPaymentTable={'_meta':{'table':_0x1d3739(0x1fb),'primaryKey':'id'},'byBatchPaymentId':{'_meta':{'table':_0x1d3739(0x1fb),'index':'byBatchPaymentId','primaryKey':_0x1d3739(0x240)}},'byLocationId':{'_meta':{'table':_0x1d3739(0x1fb),'index':_0x1d3739(0x2af),'primaryKey':_0x1d3739(0x23b)}},'byMemberId':{'_meta':{'table':_0x1d3739(0x1fb),'index':'byMemberId','primaryKey':_0x1d3739(0x241)}},'byDebitDate':{'_meta':{'table':_0x1d3739(0x1fb),'index':_0x1d3739(0x254),'primaryKey':_0x1d3739(0x226)}},'byMemberContractBillingId':{'_meta':{'table':_0x1d3739(0x1fb),'index':_0x1d3739(0x2d5),'primaryKey':'memberContractBillingId'}},'byBatchId':{'_meta':{'table':'RejectionPayment','index':'byBatchId','primaryKey':_0x1d3739(0x1f5)}}};export const RejectionProcessTable={'_meta':{'table':_0x1d3739(0x259),'primaryKey':'id'}};export const RoleTable={'_meta':{'table':_0x1d3739(0x2d6),'primaryKey':'id'},'byRoleName':{'_meta':{'table':_0x1d3739(0x2d6),'index':_0x1d3739(0x29c),'primaryKey':'roleName'}}};export const RoleAndPermissionTable={'_meta':{'table':'RoleAndPermission','primaryKey':'id'},'byPermission':{'_meta':{'table':_0x1d3739(0x269),'index':_0x1d3739(0x268),'primaryKey':_0x1d3739(0x22f)}},'byRole':{'_meta':{'table':'RoleAndPermission','index':_0x1d3739(0x2a8),'primaryKey':_0x1d3739(0x2c1)}}};export const SettlementReportTable={'_meta':{'table':_0x1d3739(0x2c2),'primaryKey':'id'},'bySettlementInvoiceId':{'_meta':{'table':'SettlementReport','index':'bySettlementInvoiceId','primaryKey':'settlementInvoiceId'}},'byBrandId':{'_meta':{'table':'SettlementReport','index':_0x1d3739(0x2d2),'primaryKey':'brandId'}},'byLocationId':{'_meta':{'table':_0x1d3739(0x2c2),'index':_0x1d3739(0x2af),'primaryKey':_0x1d3739(0x23b)}}};export const SmsIncomingTable={'_meta':{'table':_0x1d3739(0x29a),'primaryKey':'id'},'bySender':{'_meta':{'table':'SmsIncoming','index':_0x1d3739(0x253),'primaryKey':'from','sortKey':_0x1d3739(0x27b)}},'byDestination':{'_meta':{'table':_0x1d3739(0x29a),'index':_0x1d3739(0x251),'primaryKey':'to','sortKey':_0x1d3739(0x27b)}}};export const SmsOutboxTable={'_meta':{'table':_0x1d3739(0x281),'primaryKey':'id'},'byLocationId':{'_meta':{'table':'SmsOutbox','index':_0x1d3739(0x2af),'primaryKey':_0x1d3739(0x23b),'sortKey':_0x1d3739(0x25f)}},'byMemberId':{'_meta':{'table':_0x1d3739(0x281),'index':_0x1d3739(0x230),'primaryKey':_0x1d3739(0x241),'sortKey':_0x1d3739(0x25f)}},'byIdentityName':{'_meta':{'table':_0x1d3739(0x281),'index':_0x1d3739(0x2b3),'primaryKey':_0x1d3739(0x2d4),'sortKey':'createdAt'}}};export const SmsResultTable={'_meta':{'table':_0x1d3739(0x24e),'primaryKey':'id'}};export const StaffLocationAccessTable={'_meta':{'table':'StaffLocationAccess','primaryKey':'id'},'byMemberId':{'_meta':{'table':'StaffLocationAccess','index':'byMemberId','primaryKey':_0x1d3739(0x241),'sortKey':_0x1d3739(0x25f)}}};export const StatisticsTable={'_meta':{'table':_0x1d3739(0x1f3),'primaryKey':'id'},'byType':{'_meta':{'table':_0x1d3739(0x1f3),'index':_0x1d3739(0x288),'primaryKey':'type'}}};export const TransactionTable={'_meta':{'table':_0x1d3739(0x215),'primaryKey':'id'},'ByMemberId':{'_meta':{'table':_0x1d3739(0x215),'index':_0x1d3739(0x228),'primaryKey':_0x1d3739(0x241),'sortKey':_0x1d3739(0x25f)}},'byMemberContractId':{'_meta':{'table':_0x1d3739(0x215),'index':_0x1d3739(0x1ea),'primaryKey':_0x1d3739(0x210)}},'bySuspensionBillingCreditId':{'_meta':{'table':_0x1d3739(0x215),'index':_0x1d3739(0x291),'primaryKey':'suspensionBillingCreditId'}},'byOrderId':{'_meta':{'table':_0x1d3739(0x215),'index':_0x1d3739(0x1f9),'primaryKey':_0x1d3739(0x267)}},'byPaymentGatewayLogId':{'_meta':{'table':'Transaction','index':'byPaymentGatewayLogId','primaryKey':_0x1d3739(0x20e)}},'byBillingCreditId':{'_meta':{'table':_0x1d3739(0x215),'index':_0x1d3739(0x276),'primaryKey':_0x1d3739(0x203)}},'byMemberContractSuspensionId':{'_meta':{'table':_0x1d3739(0x215),'index':_0x1d3739(0x295),'primaryKey':_0x1d3739(0x2a4)}},'byTransactionId':{'_meta':{'table':_0x1d3739(0x215),'index':_0x1d3739(0x27c),'primaryKey':'transactionId'}}};export const VoucherTable={'_meta':{'table':'Voucher','primaryKey':'id'},'byMembershipId':{'_meta':{'table':_0x1d3739(0x20c),'index':_0x1d3739(0x21a),'primaryKey':'membershipId'}},'byLocationId':{'_meta':{'table':'Voucher','index':_0x1d3739(0x2af),'primaryKey':_0x1d3739(0x23b)}},'byVoucherCode':{'_meta':{'table':_0x1d3739(0x20c),'index':'byVoucherCode','primaryKey':_0x1d3739(0x2c9)}},'byType':{'_meta':{'table':_0x1d3739(0x20c),'index':'byType','primaryKey':_0x1d3739(0x22c),'sortKey':'createdAt'}}};export const VoucherInvitationTable={'_meta':{'table':_0x1d3739(0x272),'primaryKey':'id'},'byMemberId':{'_meta':{'table':_0x1d3739(0x272),'index':_0x1d3739(0x230),'primaryKey':_0x1d3739(0x241)}},'byVoucherId':{'_meta':{'table':_0x1d3739(0x272),'index':_0x1d3739(0x219),'primaryKey':_0x1d3739(0x1ec)}},'byDestination':{'_meta':{'table':_0x1d3739(0x272),'index':_0x1d3739(0x251),'primaryKey':_0x1d3739(0x218)}}};export const VoucherLocationTable={'_meta':{'table':_0x1d3739(0x222),'primaryKey':'id'},'byLocationId':{'_meta':{'table':_0x1d3739(0x222),'index':_0x1d3739(0x2af),'primaryKey':_0x1d3739(0x23b)}},'byVoucherId':{'_meta':{'table':_0x1d3739(0x222),'index':_0x1d3739(0x219),'primaryKey':'voucherId'}}};export const VoucherMemberTable={'_meta':{'table':_0x1d3739(0x263),'primaryKey':'id'},'byMembershipId':{'_meta':{'table':_0x1d3739(0x263),'index':'byMembershipId','primaryKey':_0x1d3739(0x233)}},'byMemberId':{'_meta':{'table':'VoucherMember','index':_0x1d3739(0x230),'primaryKey':'memberId'}},'byVoucherId':{'_meta':{'table':_0x1d3739(0x263),'index':_0x1d3739(0x219),'primaryKey':'voucherId'}}};export const consentFormDetailTable={'_meta':{'table':_0x1d3739(0x1ee),'primaryKey':'id'},'byMemberContractId':{'_meta':{'table':_0x1d3739(0x1ee),'index':_0x1d3739(0x1ea),'primaryKey':'memberContractId'}},'byLocationId':{'_meta':{'table':_0x1d3739(0x1ee),'index':_0x1d3739(0x2af),'primaryKey':'locationId','sortKey':_0x1d3739(0x25f)}},'byMemberId':{'_meta':{'table':'consentFormDetail','index':_0x1d3739(0x230),'primaryKey':'memberId'}}};export const juniorMemberGuardianDetailTable={'_meta':{'table':_0x1d3739(0x213),'primaryKey':'Id'},'byMemberId':{'_meta':{'table':'juniorMemberGuardianDetail','index':_0x1d3739(0x230),'primaryKey':_0x1d3739(0x241)}}};