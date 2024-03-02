import { LightningElement, track , wire} from "lwc";
import { createRecord , getRecord } from "lightning/uiRecordApi";

const fieldArray = ['Account.Name', 'Account.Phone', 'Account.Website']

export default class AccountManagerLDS extends LightningElement{
    
    @track accountName;
    @track accountPhone;
    @track accountWebsite;

    @track recordId;

    @wire(getRecord, { recordId: '$recordId', fields: [fieldArray]})
    accountRecord;

    accountNameChangeHandler(event){
        this.accountName = event.target.value;
    }
    accountPhoneChangeHandler(event){
        this.accountPhone = event.target.value;
    }
    accountWebsiteChangeHandler(event){
        this.accountWebsite = event.target.value;
    }

    createAccount(){
        const fields = {'Name' : this.accountName, 'Phone' : this.accountPhone, 'Website': this.accountWebsite};
        const recordInput = {
            'apiName' : 'Account',
            'fields' : fields
        }

        createRecord(recordInput).then(response =>{
            console.log('Account has been created :', response.id)
            this.recordId = response.id;
            console.log('Record ID has been saved :', this.recordId)
        }).catch(error=>{
            console.error('Error in Creating Account : ', error.body.message);
        });
        
    }
    get retAccountName(){
        if(this.accountRecord.data){
            console.log('accountRecord Saved:', accountRecord.name);
            return this.accountRecord.data.fields.Name.value;

        }
        return undefined;
    }
    get retAccountPhone(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Phone.value;

        }
        return undefined;
    }
    get retAccountWebsite(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Website.value;

        }
        return undefined;
    }
}