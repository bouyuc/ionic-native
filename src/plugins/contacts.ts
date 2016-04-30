import {Plugin, Cordova} from './plugin';

export interface ContactProperties {
    /** A globally unique identifier. */
    id?: string;
    /** The name of this Contact, suitable for display to end users. */
    displayName?: string;
    /** An object containing all components of a persons name. */
    name?: ContactName;
    /** A casual name by which to address the contact. */
    nickname?: string;
    /** An array of all the contact's phone numbers. */
    phoneNumbers?: ContactField[];
    /** An array of all the contact's email addresses. */
    emails?: ContactField[];
    /** An array of all the contact's addresses. */
    addresses?: ContactAddress[];
    /** An array of all the contact's IM addresses. */
    ims?: ContactField[];
    /** An array of all the contact's organizations. */
    organizations?: ContactOrganization[];
    /** The birthday of the contact. */
    birthday?: Date;
    /** A note about the contact. */
    note?: string;
    /** An array of the contact's photos. */
    photos?: ContactField[];
    /** An array of all the user-defined categories associated with the contact. */
    categories?: ContactField[];
    /** An array of web pages associated with the contact. */
    urls?: ContactField[];
}

// export interface Contact extends ContactProperties {
//    /**
//     * Returns a new Contact object that is a deep copy of the calling object, with the id property set to null
//     */
//    clone(): Contact;
//    /**
//     * Removes the contact from the device contacts database, otherwise executes an error callback with a ContactError object.
//     * @param onSuccess Success callback function invoked on success operation.
//     * @param onError Error callback function, invoked when an error occurs.
//     */
//    remove(
//        onSuccess?: () => void,
//        onError?: (error: Error) => void): void;
//    /**
//     * Saves a new contact to the device contacts database, or updates an existing contact if a contact with the same id already exists.
//     * @param onSuccess Success callback function invoked on success operation with che Contact object.
//     * @param onError Error callback function, invoked when an error occurs.
//     */
//    save(
//        onSuccess?: (contact: Contact) => void,
//        onError?: (error: Error) => void): void;
// }

export class Contact {

    private _objectInstance: any;

    get id(): string {
        return this._objectInstance.id;
    }
    set id(val: string) {
        this._objectInstance.id = val;
    }
    get displayName(): string {
        return this._objectInstance.displayName;
    }
    set displayName(val: string){
        this._objectInstance.displayName = val;
    }
    get name(): ContactName {
        return this._objectInstance.name;
    }
    set name(val: ContactName){
        this._objectInstance.name = val;
    }
    get nickname(): string {
        return this._objectInstance.nickname;
    }
    set nickname(val: string){
        this._objectInstance.nickname = val;
    }
    get phoneNumbers(): ContactField[] {
        return this._objectInstance.phoneNumbers;
    }
    set phoneNumbers(val: ContactField[]){
        this._objectInstance.phoneNumbers = val;
    }
    get emails(): ContactField[] {
        return this._objectInstance.emails;
    }
    set emails(val: ContactField[]){
        this._objectInstance.emails = val;
    }
    get addresses(): ContactAddress[] {
        return this._objectInstance.addresses;
    }
    set addresses(val: ContactAddress[]){
        this._objectInstance.addresses = val;
    }

    constructor () {
        // creat eobj
    }

}

interface ContactError {
    /** Error code */
    code: number;
    /** Error message */
    message: string;
}

declare var ContactError: {
    new(code: number): ContactError;
    UNKNOWN_ERROR: number;
    INVALID_ARGUMENT_ERROR: number;
    TIMEOUT_ERROR: number;
    PENDING_OPERATION_ERROR: number;
    IO_ERROR: number;
    NOT_SUPPORTED_ERROR: number;
    PERMISSION_DENIED_ERROR: number
};

export interface ContactName {
    /** The complete name of the contact. */
    formatted?: string;
    /** The contact's family name. */
    familyName?: string;
    /** The contact's given name. */
    givenName?: string;
    /** The contact's middle name. */
    middleName?: string;
    /** The contact's prefix (example Mr. or Dr.) */
    honorificPrefix?: string;
    /** The contact's suffix (example Esq.). */
    honorificSuffix?: string;
}

// declare var ContactName: {
//    /** Constructor for ContactName object */
//    new(formatted?: string,
//        familyName?: string,
//        givenName?: string,
//        middleName?: string,
//        honorificPrefix?: string,
//        honorificSuffix?: string): ContactName
// };

export class ContactName {
    private _objectInstance: any;

    constructor() { }

    public set givenName(val: string) {
        this._objectInstance.givenName = val;
    }
    public set familyName(val: string) {
        this._objectInstance.familyName = val;
    }
    public get givenName(): string {return this._objectInstance.givenName; }
    public get familyName(): string {return this._objectInstance.familyName; }
}

export interface ContactField {
    /** A string that indicates what type of field this is, home for example. */
    type: string;
    /** The value of the field, such as a phone number or email address. */
    value: string;
    /** Set to true if this ContactField contains the user's preferred value. */
    pref: boolean;
}

declare var ContactField: {
    /** Constructor for ContactField object */
    new(type?: string,
        value?: string,
        pref?: boolean): ContactField
};

export interface ContactAddress {
    /** Set to true if this ContactAddress contains the user's preferred value. */
    pref?: boolean;
    /** A string indicating what type of field this is, home for example. */
    type?: string;
    /** The full address formatted for display. */
    formatted?: string;
    /** The full street address. */
    streetAddress?: string;
    /** The city or locality. */
    locality?: string;
    /** The state or region. */
    region?: string;
    /** The zip code or postal code. */
    postalCode?: string;
    /** The country name. */
    country?: string;
}

declare var ContactAddress: {
    /** Constructor of ContactAddress object */
    new(pref?: boolean,
        type?: string,
        formatted?: string,
        streetAddress?: string,
        locality?: string,
        region?: string,
        postalCode?: string,
        country?: string): ContactAddress
};

export interface ContactOrganization {
    /** Set to true if this ContactOrganization contains the user's preferred value. */
    pref?: boolean;
    /** A string that indicates what type of field this is, home for example. */
    type?: string;
    /** The name of the organization. */
    name?: string;
    /** The department the contract works for. */
    department?: string;
    /** The contact's title at the organization. */
    title?: string;
}

declare var ContactOrganization: {
    /** Constructor for ContactOrganization object */
    new(pref?: boolean,
        type?: string,
        name?: string,
        department?: string,
        title?: string): ContactOrganization
};

/** Search options to filter navigator.contacts.  */
interface ContactFindOptions {
    /** The search string used to find navigator.contacts. */
    filter?: string;
    /** Determines if the find operation returns multiple navigator.contacts. */
    multiple?: boolean;
    /* Contact fields to be returned back. If specified, the resulting Contact object only features values for these fields. */
    desiredFields?: string[];
}

declare var ContactFindOptions: {
    /** Constructor for ContactFindOptions object */
    new(filter?: string,
        multiple?: boolean,
        desiredFields?: string[]): ContactFindOptions
};

export class ContactFindOptions {
    private _objectInstance: any;
    public set filter(val: string) {
        this._objectInstance.filter = val;
    }

    public set multiple(val: boolean) {
        this._objectInstance.multiple = val;
    }

    public set desiredFields(val) {
        this._objectInstance.desiredFields = val;
    }

    public set hasPhoneNumber(val: boolean) {
        this._objectInstance.hasPhoneNumber = val;
    }
}

// declare var Contact: {
//  new(): Contact
// };

/**
 * @name Contacts
 * @description
 * Access and manage Contacts on the device.
 *
 * Requires plugin: `cordova-plugin-contacts`
 * For full info, please see the [Cordova Contacts plugin docs](https://github.com/apache/cordova-plugin-contacts)
 *
 * @usage
 *
 * ```js
 * import {Contacts} from 'ionic-native';
 *
 *
 *
 * Contacts.create({
 *   displayName: "Mr. Ionitron"
 * }).then((contact) => {}, (err) => {})
 * ```
 *
 *
 */
@Plugin({
  plugin: 'cordova-plugin-contacts',
  pluginRef: 'navigator.contacts',
  repo: 'https://github.com/apache/cordova-plugin-contacts'
})
export class Contacts {

    private _objectInstance: any;

    public set displayName(val: string) {
        this._objectInstance.displayName = val;
    }

    public set nickname(val: boolean) {
        this._objectInstance.nickname = val;
    }

    get displayName() {return this._objectInstance.displayName; }
    get nickname() {return this._objectInstance.nickname; }

  /**
   * Create a new Contact object.
   *
   * @param options {Object} Object whose properties the created Contact should have.
   * @return {Contact} Returns the created contact
   */
  constructor (options?: ContactProperties) {
      this._objectInstance = navigator.contacts(options);
  };

  /**
   * Search for contacts in the Contacts list.
   *
   * Example: Contacts.find(['*'], { filter: 'Max' }) // will search for a displayName of 'Max'
   *
   * @param fields {string[]}  Contact fields to be used as a search qualifier.
   *  A zero-length contactFields parameter is invalid and results in ContactError.INVALID_ARGUMENT_ERROR.
   *  A contactFields value of "*" searches all contact fields.
   *
   * @param options {Object} the options to query with:
   *   filter: The search string used to find navigator.contacts. (string) (Default: "")
   *   multiple: Determines if the find operation returns multiple navigator.contacts. (Boolean) (Default: false)
   *   desiredFields: Contact fields to be returned back. If specified, the resulting Contact object only features values for these fields. (DOMString[]) [Optional]
   *   hasPhoneNumber(Android only): Filters the search to only return contacts with a phone number informed. (Boolean) (Default: false)
   *
   * @return Returns a Promise that resolves with the search results (an array of Contact objects)
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  static find(fields: string[], options?: any): Promise<any> { return; }


  /**
   * Select a single Contact.
   * @return Returns a Promise that resolves with the selected Contact
   */
  @Cordova()
  static pickContact(): Promise<any> { return; }
}
