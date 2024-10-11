import { initSchemas } from "@labs/schemas/validate";

// Schemas
export * as AccessCode from "./access/access-code";
export * as AccessGroup from "./access/access-group";
export * as AccessPoint from "./access/access-point";
export * as Audit from "./interaction/audit";
export * as Brand from "./brand/brand";
export * as Calendar from "./calendar/calendar";
export * as CalendarBooking from "./calendar/calendar-booking";
export * as CalendarEvent from "./calendar/calendar-event";
export * as Contract from "./contract/contract";
export * as DebtCollection from "./payments/debt-collection";
export * as DirectDebit from "./payments/direct-debit";
export * as Document from "./document/document";
export * as Email from "./interaction/email";
export * as IotDevice from "./iot/iot-device";
export * as Location from "./brand/location";
export * as Membership from "./membership/membership";
export * as Note from "./user/note";
export * as PaymentMethod from "./payments/payment-method";
export * as Promotion from "./membership/promotion";
export * as Question from "./question/question";
export * as Sms from "./interaction/sms";
export * as SmsTemplate from "./brand/sms-template";
export * as Suspension from "./contract/suspension";
export * as Tag from "./tag/tag";
export * as Transaction from "./payments/transaction";
export * as User from "./user/user";
export * as Visit from "./access/visit";

initSchemas();