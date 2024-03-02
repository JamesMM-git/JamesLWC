import Extension from "@salesforce/schema/User.Extension";
import { LightningElement, track } from "lwc";
import { createRecord } from "lightning/uiRecordApi";

export default class AccountManagerLDS extends LightningElement{
    @track accountName;
    @track accountPhone;
    @track accountWebsite;

    accountNameChangeHandler(event){
        this.accountName = event.target.value;
    }
    accountPhoneChangeHandler(event){
        this.accountName = event.target.value;
    }
    accountWebsiteChangeHandler(event){
        this.accountName = event.target.value;
    }

    createAccount(){
        const fields = {'Name ' : this.accountName, 'Phone' : this.accountPhone, 'Website': this.accountWebiste};
        const recordInput = {apiName : 'Account ', fields}

        createRecord(recordInput).then(response =>{
            console.log('Account has been created :', response.id)
        }).catch(error=>{
            console.error('Error in Creating Account : ', error.body.message);
        });
        
    }
}