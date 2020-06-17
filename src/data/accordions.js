import Account from "../images/Accounts.png";
import CreditCard from "../images/Credit-card.png";
import LoanDetails from "../images/Loan-details.png";
import Document from "../images/Document_Personal-Details-Update.png";
import BranchLocator from "../images/Branch-&-ATM-Locator.png";
import RewardLoyalty from "../images/Rewards-&-Loyalty.png";

export const accordionData = [
  {
    id: "accounts",
    accordionHeader: "accounts",
    image: Account,
    imageText: "",
    button: {
      text: "To view the services available on CBD mobile",
      link: "https://www.youtube.com/watch?v=K8zxaTbVM7g&feature=youtu.be",
    },
    subDetails: [
      {
        pid: "details",
        subTitle: "Account balance details",
        details: `
          <div class="data-details">
          <b>To view your account details through CBD Mobile App:</b>
          <p>
          1 Login to CBD Mobile App.
          </p>
          <p>
          2 All your accounts and the available balance will show in Home page Accounts’ tab
          </p>
          3 Tap on account if you wish to view more information
          
          <b>To view your account details through CBD Online Banking:</b>
          1 Login to CBD Online Banking
          2 Go to 'Accounts' Tab to see all your accounts and available balance
          3 Tap on the Account Number to view your account details.
          </div>
          `,
      },
      {
        pid: "details",
        subTitle: "Activate debit card",
        details: `
          <b>To view your account details through CBD Mobile App:</b>
          <p>
          1 Login to CBD Mobile App.
          </p>
          <p>
          2 All your accounts and the available balance will show in Home page Accounts’ tab
          </p>
          3 Tap on account if you wish to view more information
          
          <b>To view your account details through CBD Online Banking:</b>
          1 Login to CBD Online Banking
          2 Go to 'Accounts' Tab to see all your accounts and available balance
          3 Tap on the Account Number to view your account details.
          `,
      },
      {
        pid: "details",
        subTitle: "Setup or Change Debit Card PIN",
        details: `
        If you already registered to Digital Banking, to activate your Debit Card through CBD Mobile App:

        <p> 1	Login to CBD Mobile App. </p>
        <p> 2	Go to ‘Cards’ and select the card you wish to activate. </p>
        <p> 3	Tap on ‘Activate Now’. </p>
        <p> 4	Enter Card expiry date and submit. </p>
        
        If you already registered to Digital Banking, to activate your Debit Card through CBD Online Banking:
        
        <p> 1	Login to CBD Online Banking. </p>
        <p> 2	Click on ‘Accounts’ and go to Cards Options. </p>
        <p> 3	Select the Debit Card you wish to activate. </p>
        <p> 4	Enter Debit Card expiry date and click on ‘ACTIVATE NOW’. </p>
          `,
      },
      {
        pid: "details",
        subTitle: "Account Statement",
        details: `
        <b> To view your account statement through CBD Mobile App:  </b>
        <p> 1	Login to CBD Mobile App </p>
        <p> 2	In Dashboard, Tap on the account to view account statement </p>
        <p> 3	Tap on 'Statements' tab </p>
        <p> 4	For current month statement Tap on current month  </p>
        <p> 5	Tap on 'estatements' and select 'Month' and 'Year' for which you wish to view the account statement </p>
        <p> 6	Account statement for the particular month will be displayed. </p>
        <p> 7	You can also download the statement by tapping on ' View PDF' </p>

        <b> To view your account statement through CBD Online Banking: </b>
        <p> 1	Login to CBD Online Banking. </p>
        <p> 2	Go to 'Accounts' and click on the account number for which you wish to view the account statement. </p>
        <p> 3	Click on 'Statements' </p>
        <p> 4	Select 'Month' and 'Year' for which you wish to download the statement and click 'Submit'. </p>
        <p> 5	Account statement for the particular month will be displayed. You can also download the statement by 
        clicking on 'PDF Download' </p>
          `,
      },
      {
        pid: "details",
        subTitle: "Account IBAN",
        details: `
        <b> To view IBAN details through CBD Mobile App:  </b>
        <p> 1	Login to CBD Mobile App </p>
        <p> 2	Tap on account you wish to view IBAN details under ‘Accounts’ tab </p>
        <p> 3	IBAN details will be visible under ‘Account info’ tab </p>
        <p> 4	You can also share IBAN details by tapping on Share icon </p>

        <b> To view IBAN details through CBD Online Banking: </b>
        <p> 1	Login to CBD Online Banking </p>
        <p> 2	Click on ‘Accounts’ tab </p>
        <p> 3	Click on Account number you wish to view IBAN under ‘My Accounts’. </p>
        <p> 4	IBAN details will be visible under ‘Account Details’ </p>
          `,
      },
      {
        pid: "details",
        subTitle: "Cheque Book Request",
        details: `
        To request for a new cheque book:
        <p> 1	Login to CBD Online Banking </p>
        <p> 2	Go to 'Services' Tab </p>
        <p> 3	Click on 'Requests' Tab and choose 'Cheque book request' from the drop down menu </p>
        <p> 4	Fill out cheque book request details and click on 'INITIATE'.  (You will need to enter the a secure token to complete your request) </p>
        <p> 5	Please note that your cheque book will be couriered to your address with the bank. </p>
        
          `,
      },
    ],
  },
  {
    id: "credit-card",
    accordionHeader: "Credit card",
    image: CreditCard,
    imageText: "",
    button: {
      text: "To view the services available on CBD mobile",
      link: "https://www.youtube.com/watch?v=K8zxaTbVM7g&feature=youtu.be",
    },
    subDetails: [
      {
        pid: "details",
        subTitle: "Activate Credit Card",
        details: `
          <b> To activate Credit Card through CBD Mobile App: </b>
          <p> 1. Login to CBD Mobile Banking. </p>
          <p> 2.	Go to 'Cards' and select the card you wish to activate. </p>
          <p> 3.	Tap on 'Manage' and select 'Activate card'. </p>
          <p> 4.	Enter card expiry date and submit. </p>
          
          <b> To activate Credit Card through CBD Online Banking: </b>
          <p> 1. Login to CBD Mobile Banking. </p>
          <p> 2.	Click on 'Accounts' and go to 'Cards' option. </p>
          <p> 3.	Select the Credit Card you wish to activate. </p>
          <p> 4.	Enter expiry date and click on 'Activate'. </p>
          `,
      },
      {
        pid: "details",
        subTitle: "Setup or Reset Credit Card PIN*",
        details: `
        To setup a new Credit Card PIN or to Reset/Change your Credit Card PIN:
          <p> 1. Login to CBD Mobile Banking. </p>
          <p> 2.	Click on 'Accounts' and go to 'Cards' option. </p>
          <p> 3.	Select the Credit Card and click on 'Manage PIN'. </p>
          <p> 4.	Select card from drop down list. </p>
          <p> 5.	Enter PIN and confirm the same PIN and click on 'CONTINUE'. </p>
          
          <p> *This service available in Online Banking only </p>
          `,
      },
      {
        pid: "details",
        subTitle: "Credit Card payment details",
        details: `
        <b> To view your Credit Card payment details through CBD Mobile App: </b>
          <p> 1.	Login to CBD Mobile App. </p>
          <p> 2.	All your Cards will be showing in main dashboard under accounts tab or go to 'Cards' tab and browse for 
          the Credit Card. </p>
          <p> 3.	You can see 'Payment Details' under 'Details' tab of your Credit Card. </p>
          
          <b> To view your Credit Card payment details through CBD Online Banking: </b>
          <p> 1. Login to CBD Mobile Banking. </p>
          <p> 2.	Tap on 'Accounts' and go to 'Cards' option. </p>
          <p> 3.	Tap on 'Card Details' option under 'Credit Cards' section. </p>
          <p> 4.	You can view your Credit Card payment details under 'Payment Due Details'. </p>
          `,
      },
      {
        pid: "details",
        subTitle: "Credit Card Statement",
        details: `
        <b> To view your Credit Card statements through CBD Mobile App: </b>
          <p> 1.	Login to CBD Mobile App. </p>
          <p> 2.	Either Tap on the ‘card account’ on the Dashboard or go to 'Cards' tab and browse for your credit card. </p>
          <p> 3.	Select 'Transactions' tab and choose 'View Statements'. </p>
          <p> 4.	Go to 'eStatements' tab and choose the month to view your statement. </p>
          <p> 5.	You can also download your statement by tapping on 'PDF Download'. </p>
          
          <b> To view your Credit Card statements through CBD Online Banking: </b>
          <p> 1. Login to CBD Mobile Banking. </p>
          <p> 2.	Click on 'Accounts' tab and go to 'Cards' option </p>
          <p> 3.	Click on 'Statement' button under 'Credit Cards' section. </p>
          <p> 4.	Choose the month from 'Select a month' dropdown and hit on 'Submit' button to view your statement. </p>
          <p> 5.	You can also download your statement by clicking on 'PDF Download'. </p>
          `,
      },
      {
        pid: "details",
        subTitle: "Credit Card Balance details",
        details: `
        <b> To view your Credit Card balance through CBD Mobile App: </b>
          <p> 1. Login to CBD Mobile App. </p>
          <p> 2. All your Cards will be showing in main dashboard under accounts tab or go to 'Cards' tab and browse for 
          the Credit Card. </p>
          <p> 3. You can view available balance and outstanding balance of your Credit Card under 'Details' tab. </p>
          
          <b> To view your Credit Card balance through CBD Online Banking: </b>
          <p> 1. Login to CBD Mobile Banking. </p>
          <p> 2. Tap on 'Accounts' and go to 'Cards' option. </p>
          <p> 3. You can view available balance and outstanding balance of your Credit Card under 'Credit Cards' section. </p>
          `,
      },
      {
        pid: "details",
        subTitle: "Activate Credit Card",
        details: `
        <b> To activate your Credit Card through CBD Mobile App: </b>
          <p> 1. Login to CBD Mobile App. </p>
          <p> 2. Go to 'Cards' and select the card you wish to activate. </p>
          <p> 3. Tap on 'Manage' and select 'Activate card'. </p>
          <p> 4. Enter card expiry date and submit. </p>
          
          <b> To activate your Credit Card through CBD Online Banking: </b>
          <p> 1. Login to CBD Mobile Banking. </p>
          <p> 2. Click on 'Accounts' and go to 'Cards' option. </p>
          <p> 3. Select the Credit Card you wish to activate. </p>
          <p> 4. Enter expiry date and click on 'Activate'. </p>
          `,
      },
      {
        pid: "details",
        subTitle: "Setup or Reset/Change Credit Card PIN*",
        details: `
        <b> To setup a new Credit Card PIN or to reset/change your Credit Card PIN: </b>
          <p> 1. Login to CBD Online Banking. </p>
          <p> 2. Click on 'Accounts' and go to 'Cards' option. </p>
          <p> 3. Select the Credit Card and click on 'Manage PIN'. </p>
          <p> 4. Select card from drop down list. </p>
          <p> 5. Enter PIN and confirm the same PIN and click on 'CONTINUE'. </p>
          
          <p> *This service available on Online Banking only </p>
          `,
      },
      {
        pid: "details",
        subTitle: "Credit Card Replacement Request",
        details: `
        <b> To request for a replacement of your Credit Card through CBD Mobile App: </b>
          <p> 1. Login to CBD Mobile App. </p>
          <p> 2. Go to 'Cards' and select the Credit Card you wish to replace. </p>
          <p> 3. Tap on 'Manage' tab and select 'Report damaged or incorrect'. </p>
          <p> 4. Verify the details and Tap on 'Order replacement card'. </p>
          
          <b> To request for a replacement of your Credit Card through CBD Online Banking: </b>
          <p> 1. Login to CBD Mobile Banking. </p>
          <p> 2. Tap on 'Accounts' and go to 'Cards' option. </p>
          <p> 3. Select the Credit Card you wish to replace. </p>
          <p> 4. Tap on 'Manage card' and select 'Report damaged or incorrect'. </p>
          <p> 5. Verify the details and Tap on 'Confirm'. </p>
          `,
      },
      {
        pid: "details",
        subTitle: "Supplementary Card Limit Change",
        details: `
        <b> To update Supplementary Credit Card limit through CBD Mobile App: </b>
          <p> 1. Login to CBD Mobile App. </p>
          <p> 2. Go to 'Cards' and select the Supplementary Credit Card. </p>
          <p> 3. Tap on 'Manage' and select 'Set your limit'. </p>
          <p> 4. Set the required Credit Card limit for Supplementary Card and Tap on 'Confirm'. </p>
          
          <b> To update Supplementary Credit Card limit through CBD Online Banking: </b>
          <p> 1. Login to CBD Mobile Banking. </p>
          <p> 2. Tap on 'Accounts' and go to Cards Options. </p>
          <p> 3. Under Supplementary Credit Card, Tap on 'Manage Cards'. </p>
          <p> 4. Tap on 'Manage card' and select 'Report damaged or incorrect'. </p>
          <p> 5. Set the required Credit Card limit for Supplementary Card and Tap on 'Confirm'. </p>
          `,
      },
    ],
  },
  {
    id: "loan-details",
    accordionHeader: "loan details",
    image: LoanDetails,
    imageText: "",
    button: {
      text: "To view the services available on CBD mobile",
      link: "https://www.youtube.com/watch?v=K8zxaTbVM7g&feature=youtu.be",
    },
    subDetails: [
      {
        pid: "details",
        subTitle: "Loan Amount",
        details: `
        <b> To view your Loan Amount through CBD Mobile App: </b>
        <p> 1. Login to CBD Mobile App. </p>
        <p> 2. Tap on 'View All Accounts' on the Dashboard. </p>
        <p> 3. Select preferred loan type for which you wish to view the loan details. </p>
        <p> 4. You can view the 'Loan outstanding Amount'. </p>
        <p> 5. Tap on the loan to view the loan amount. </p>
        
        <b> To view your Loan Amount through CBD Online Banking: </b>
        <p> 1. Login to CBD Mobile Banking. </p>
        <p> 2. Click on 'Accounts' tab. </p>
        <p> 3. Click on '+' to Expand 'Loans' option. </p>
        <p> 4. All your loans with outstanding amount balance will show. </p>
        <p> 5. Click on the loan and you can see loan amount under loan details. </p>
          `,
      },
      {
        pid: "details",
        subTitle: "Loan Outstanding Balance",
        details: `
        <b> To view your Loan Outstanding Amount through CBD Mobile App: </b>

        <p> 1. Login to CBD Mobile App. </p>
        <p> 2. Tap 'View All Accounts' on the Dashboard. </p>
        <p> 3. Select preferred Loan type for which you wish you view the loan details. </p>
        <p> 4. You can view your Loan Outstanding Amount mentioned with your loan type. </p>

        <b> To view your Loan Outstanding Amount through CBD Online Banking: </b>

        <p> 1. Login to CBD Online Banking. </p>
        <p> 2. Click on 'Accounts' tab. </p>
        <p> 3. Click on '+' to Expand 'Loans' option. </p>
        <p> 4. All your loans with outstanding amount balance will show  </p>
          `,
      },
      {
        pid: "details",
        subTitle: "Loan Start/End Date Details",
        details: `
        <b> To view your Loan Start Date through CBD Mobile App: </b>

        <p> 1. Login to CBD Mobile App. </p>
        <p> 2. Tap 'View All Accounts' on the Dashboard. </p>
        <p> 3. Select preferred Loan type for which you wish you view the loan details. </p>
        <p> 4. You can view the Loan Start Date mentioned as 'Start Date. </p>

        <b> To view your Loan End Date through CBD Mobile App: </b>

        <p> 1. Login to CBD Mobile App. </p>
        <p> 2. Tap 'View All Accounts' on the Dashboard. </p>
        <p> 3. Select preferred Loan type for which you wish you view the loan details. </p>
        <p> 4. You can view your Loan End Date mentioned as ‘End date’.  </p>

        <b> To view your Loan Start Date through CBD Online Banking: </b>

        <p> 1. Login to CBD Online Banking. </p>
        <p> 2. Click on 'Accounts' tab. </p>
        <p> 3. Click on '+' to Expand 'Loans' option. </p>
        <p> 4. Click on 'Loan Account Number' for the loan type you which you view the details. </p>
        <p> 5. You can view the Loan Start Date mentioned as 'Opening Date' under Loan Details tab. </p>

        <b> To view your Loan End Date through CBD Online Banking: </b>

        <p> 1. Login to CBD Online Banking. </p>
        <p> 2. Click on 'Accounts' tab. </p>
        <p> 3. Click on '+' to Expand 'Loans' option. </p>
        <p> 4. Click on 'Loan Account Number' for the loan type you which you view the details. </p>
        <p> 5. You can view your Loan End Date mentioned as 'Loan Maturity Date' under Loan Details tab. </p>
          `,
      },
      {
        pid: "details",
        subTitle: "Loan Interest Rate",
        details: `
        <b> To view your Loan Interest Rate through CBD Mobile App: </b>

        <p> 1. Login to CBD Mobile App. </p>
        <p> 2. Tap 'View All Accounts' on the Dashboard. </p>
        <p> 3. Select preferred Loan type for which you wish you view the loan details. </p>
        <p> 4. YYou can view your Loan Interest Rate mentioned as 'Interest Rate'. </p>

        <b> To view your Loan Interest Rate through CBD Online Banking: </b>

        <p> 1. Login to CBD Online Banking. </p>
        <p> 2. Click on 'Accounts' tab. </p>
        <p> 3. Click on '+' to Expand 'Loans' option. </p>
        <p> 4. Click on 'Loan Account Number' for the loan type you which you view the details. </p>
        <p> 5. You can view your Loan Interest Rate mentioned as 'Interest Rate' under Loan Details tab. </p>
          `,
      },
      {
        pid: "details",
        subTitle: "Next Installment Amount",
        details: `
        <b> To view next installment amount of your Loan through CBD Mobile App: </b>

        <p> 1. Login to CBD Mobile App. </p>
        <p> 2. Tap 'View All Accounts' on the Dashboard. </p>
        <p> 3. Select preferred Loan type for which you wish you view the loan details. </p>
        <p> 4. You can view your Loan Installment Amount mentioned as 'Next Installment Amount'. </p>

        <b> To view next installment amount of your Loan through CBD Online Banking: </b>

        <p> 1. Login to CBD Online Banking. </p>
        <p> 2. Click on 'Accounts' tab. </p>
        <p> 3. Click on '+' to Expand 'Loans' option. </p>
        <p> 4. Click on 'Loan Account Number' for the loan type you which you view the details. </p>
        <p> 5. YYou can view your Loan Interest Rate mentioned as 'Next Installment Amount' under Outstanding Loan Details tab. </p>
          `,
      },
      {
        pid: "details",
        subTitle: "Next Installment Date",
        details: `
        <b> To view next installment date of your Loan through CBD Mobile App: </b>

        <p> 1. Login to CBD Mobile App. </p>
        <p> 2. Tap 'View All Accounts' on the Dashboard. </p>
        <p> 3. Select preferred Loan type for which you wish you view the loan details. </p>
        <p> 4. You can view your Loan Next Installment Date mentioned as 'Next Installment Date'. </p>

        <b> To view next installment date of your Loan through CBD Online Banking: </b>

        <p> 1. Login to CBD Online Banking. </p>
        <p> 2. Click on 'Accounts' tab. </p>
        <p> 3. Click on '+' to Expand 'Loans' option. </p>
        <p> 4. Click on 'Loan Account Number' for the loan type you which you view the details. </p>
        <p> 5. You can view your Loan Next Installment Date mentioned as 'Next Installment Date' under Outstanding Loan Details tab. </p>
          `,
      },
    ],
  },
  {
    id: "ocument-upate",
    accordionHeader: "Docutment / Personal Details Update",
    image: Document,
    imageText: "",
    button: {
      text: "To view the services available on CBD mobile",
      link: "https://www.youtube.com/watch?v=K8zxaTbVM7g&feature=youtu.be",
    },
    subDetails: [
      {
        pid: "details",
        subTitle: "Emirates ID Update",
        details: `
        <b> To update your Emirates ID through CBD Mobile App: </b>

        <p> 1. Login to CBD Mobile App. </p>
        <p> 2. Go to 'More' and Tap on 'My Profile'. </p>
        <p> 3. Tap on 'Update'. </p>
        <p> 4. Select 'Emirates ID Update'. </p>
        <p> 5. Take front and backside picture of your Emirates ID and Tap 'Continue'. </p>
        <p> 6. Fill up the required details and Tap on 'Update'. </p>

        <b> To update your Emirates ID through CBD Online Banking: </b>

        <p> 1. Login to CBD Online Banking. </p>
        <p> 2. Click on 'Services' and go to 'Request' tab. </p>
        <p> 3. Select 'Emirates ID Update' from Request Type dropdown menu. </p>
        <p> 4. Fill up the required details and also upload your Emirates ID Front Picture and Back picture. </p>
        <p> 5. Once you are done, click on 'Update'. </p>
        <p> 6. Verify the details provided and click on 'Confirm'. </p>
          `,
      },
      {
        pid: "details",
        subTitle: "Address Update*",
        details: `
        <b> To update your address: </b>

        <p> 1. Login to CBD Online Banking. </p>
        <p> 2. You can update your information such as mobile number, Emirates ID ,email ID and address by clicking 'Service' tab and click on 'Request' to update your personal information. </p>

        <p> *This service available on Online Banking only. </p>
          `,
      },
      {
        pid: "details",
        subTitle: "Email Address Update",
        details: `
        <b> To update your Email Address through CBD Mobile App: </b>

        <p> 1. Login to CBD Mobile App. </p>
        <p> 2. Go to 'More' and Tap on 'My Profile'. </p>
        <p> 3. Tap on 'Update'. </p>
        <p> 4. Select 'Update my email address'. </p>
        <p> 5. Enter your new Email address and tap on ‘update’. </p>

        <b> To update your Email Address through CBD Online Banking: </b>

        <p> 1. Login to CBD Online Banking. </p>
        <p> 2. Click on 'Services' and go to 'Request' tab. </p>
        <p> 3. Click on  ‘contacts details update’. </p>
        <p> 4. You can see your existing Email address with the bank in masked format. Click on ‘Email update’. </p>
        <p> 5. Enter your Email ID and submit the request. </p>
          `,
      },
      {
        pid: "details",
        subTitle: "Mobile Number Update",
        details: `
        <b> To update your Emirates ID through CBD Mobile App: </b>

        <p> 1. Login to CBD Mobile App. </p>
        <p> 2. Go to 'More' and Tap on 'My Profile'. </p>
        <p> 3. Tap on 'Update'. </p>
        <p> 4. Select 'Mobile Number Update'. </p>
        <p> 5. Enter your new mobile number and Tap 'Next'. </p>
        <p> 6. Enter OTP received on current registered mobile number with the Bank and submit the request. </p>

        <b> To update your Emirates ID through CBD Online Banking: </b>

        <p> 1. Login to CBD Online Banking. </p>
        <p> 2. Click on 'Services' and go to 'Request' tab. </p>
        <p> 3. Click on ‘contact details update’. </p>
        <p> 4. You can see your existing Mobile number with the bank in masked format. Click on ‘Mobile update’. </p>
        <p> 5. Enter your new mobile number. </p>
        <p> 6. Enter OTP received on current registered mobile number with the Bank and submit the request. </p>
          `,
      },
    ],
  },
  {
    id: "branch-locator",
    accordionHeader: "Branch & ATM Locator",
    image: BranchLocator,
    imageText: "",
    button: {
      text: "To view the services available on CBD mobile",
      link: "https://www.youtube.com/watch?v=K8zxaTbVM7g&feature=youtu.be",
    },
    subDetails: [
      {
        pid: "details",
        subTitle: "Nearest Branch*",
        details: `
        <b> To find Nearest Branches through CBD Online Banking: </b>

        <p> 1. Login to CBD Online Banking. </p>
        <p> 2. Go to ‘Locations’. </p>
        <p> 3. The link will open to see branches locations and map view. </p>

        <p> *This service available on Online Banking only. </p>
          `,
      },
      {
        pid: "details",
        subTitle: "ATMs Location and Map View",
        details: `
        <b> To find CBD ATMs through CBD Mobile App: </b>

        <p> 1. Login to CBD Mobile App </p>
        <p> 2. Go to ‘More’. </p>
        <p> 3. Tap on ‘Helpful info’ and ‘ATM’. </p>
        <p> 4. You can filter based on ATM type, branches and cities. </p>

        <b> To find CBD ATMs through CBD Online Banking: </b>

        <p> 1. Login to CBD Online Banking. </p>
        <p> 2. Go to ‘Locations’. </p>
        <p> 3. The link will open to see ATM locations and Map view. </p>
          `,
      },
    ],
  },
  {
    id: "reward-loyalty",
    accordionHeader: "Rewards & Loyalty",
    image: RewardLoyalty,
    imageText: "",
    button: {
      text: "To view the services available on CBD mobile",
      link: "https://www.youtube.com/watch?v=K8zxaTbVM7g&feature=youtu.be",
    },
    subDetails: [
      {
        pid: "details",
        subTitle: "Account balance details",
        details: `
        <b> To view Reward Points through CBD Mobile App: </b>

        <p> 1. Login to CBD Mobile App. </p>
        <p> 2. Tap on 'More' and select 'Rewards' or Tap on 'Reward & offers' on dashboard menu. </p>
        <p> 3. Tap on 'My Points' under 'Reward points' to view total available reward points. </p>

        <b> To view Reward Points through CBD Online Banking: </b>

        <p> 1. Login to CBD Online Banking. </p>
        <p> 2. Tap on 'CBD Rewards' on 'Overview' page </p>
        <p> 3. Tap on 'Yes' to proceed to CBD Reward Portal. </p>
        <p> 4. Tap on 'My Points' under 'Reward points' to view total available Reward points. </p>
          `,
      },
      {
        pid: "details",
        subTitle: "Reward Activity",
        details: `
        <b> To view earned CBD Reward Points through CBD Mobile App: </b>

        <p> 1. Login to CBD Mobile App. </p>
        <p> 2. Tap on 'More' and select 'Rewards' or Tap on 'Reward & offers' on dashboard menu. </p>
        <p> 3. Tap on 'Activity' under 'Reward points' to view total earned reward points. </p>

        <b> To view earned CBD Reward Points through CBD Online Banking: </b>

        <p> 1. Login to CBD Online Banking. </p>
        <p> 2. Click on 'CBD Rewards' on 'Overview' page </p>
        <p> 3. Click on 'Yes' to proceed to CBD Reward Portal. </p>
        <p> 4. Click on 'Activity' under 'Reward points' to view total earned reward points. </p>

        <b> To view redeemed CBD Reward Points through CBD Mobile App: </b>

        <p> 1. Login to CBD Mobile App. </p>
        <p> 2. Tap on 'More' and select 'Rewards' or Tap on 'Reward & offers' on dashboard menu. </p>
        <p> 3. Tap on 'Activity' tab. </p>
        <p> 4. Tap on 'Redeemed' under 'Reward points' to view total redeemed CBD Reward Points </p>

        <b> To view redeemed CBD Reward Points through CBD Online Banking: </b>

        <p> 1. Login to CBD Online Banking. </p>
        <p> 2. Click on 'CBD Rewards' on 'Overview' page </p>
        <p> 3. Click on 'Yes' to proceed to CBD Reward Portal. </p>
        <p> 4. Click on 'Activity' tab. </p>
        <p> 5. Click on 'Redeemed' under 'Reward points' to view total redeemed CBD Reward Points </p>

        <b> To view Bonus Reward Points through CBD Mobile App: </b>

        <p> 1. Login to CBD Mobile App. </p>
        <p> 2. Tap on 'More' and select 'Rewards' or tap on 'Reward & offers' on dashboard menu. </p>
        <p> 3. Tap on 'Activity' tab. </p>
        <p> 4. Tap on 'Bonus' under 'Reward points' to view total Bonus Reward Points </p>

        <b> To view Bonus Reward Points through CBD Online Banking: </b>

        <p> 1. Login to CBD Online Banking. </p>
        <p> 2. Click on 'CBD Rewards' on 'Overview' page </p>
        <p> 3. Click on 'Yes' to proceed to CBD Reward Portal. </p>
        <p> 4. Click on 'Activity' tab. </p>
        <p> 5. Click on 'Bonus' under 'Reward points' to view total Bonus Reward Points. </p>

        <b> To view Expiring Reward Points through CBD Mobile App: </b>

        <p> 1. Login to CBD Mobile App. </p>
        <p> 2. Tap on 'More' and select 'Rewards' or Tap on 'Reward & offers' on dashboard menu. </p>
        <p> 3. Tap on 'Activity' tab. </p>
        <p> 4. Tap on 'Expiring' under 'Reward points' to view Reward Points that are expiring in next 6 months. </p>

        <b> To view Expiring Reward Points through CBD Online Banking: </b>

        <p> 1. Login to CBD Online Banking. </p>
        <p> 2. Click on 'CBD Rewards' on 'Overview' page </p>
        <p> 3. Click on 'Yes' to proceed to CBD Reward Portal. </p>
        <p> 4. Click on 'Activity' tab. </p>
        <p> 5. Click on 'Expiring' under 'Reward points' to view Reward Points that are expiring in next 6 months. </p>
          `,
      },
      {
        pid: "details",
        subTitle: "Reward History",
        details: `
        <b> To view CBD Reward Points history through CBD Mobile App: </b>

        <p> 1. Login to CBD Mobile App. </p>
        <p> 2. Tap on 'More' and select 'Rewards' or click on 'Reward & offers' on dashboard menu. </p>
        <p> 3. Tap on 'Activity' tab. </p>
        <p> 4. Tap on 'History' under 'Reward points’. </p>
        <p> 5. Tap on the month you wish to view the reward points history. </p>

        <b> To view CBD Reward Points history through CBD Online Banking: </b>

        <p> 1. Login to CBD Online Banking. </p>
        <p> 2. Click on 'CBD Rewards' on 'Overview' page </p>
        <p> 3. Click on 'Yes' to proceed to CBD Reward Portal. </p>
        <p> 4. Click on 'Activity' tab. </p>
        <p> 5. Click on 'History' under 'Reward points’. </p>
        <p> 6. Click on the month you wish to view the reward points history. </p>
          `,
      },
      {
        pid: "details",
        subTitle: "Redeem Reward Point",
        details: `
        <b> To redeem CBD Reward points as cashback through CBD Mobile App: </b>

        <p> 1. Login to CBD Mobile App. </p>
        <p> 2. Tap on 'More' and select 'Rewards' or Tap on 'Reward & offers' on dashboard menu. </p>
        <p> 3. Tap on 'Redeem' under 'Reward points'. </p>
        <p> 4. Tap on the 'Cashback' option. </p>
        <p> 5. Check available amount as cashback and enter amount in 'Amount to Redeem'. </p>
        <p> 6. Select CBD Credit Card from 'Send to' option and tap 'Redeem' OR Select CBD Account from 'Send to' 
        option in case you do not have a CBD Credit Card. </p>
        <p> 7. Enter the One Time Password (OTP) sent to your registered Mobile Number. </p>

        <b> To redeem CBD Reward points as cashback through CBD Online Banking: </b>

        <p> 1. Login to CBD Online Banking. </p>
        <p> 2. Click on 'CBD Rewards' on 'Overview' page </p>
        <p> 3. Click on 'Yes' to proceed to CBD Reward Portal. </p>
        <p> 4. Click on 'Redeem' under 'Reward points'. </p>
        <p> 5. Click on the 'Cashback' option. </p>
        <p> 6. Check available amount as cashback and enter amount in 'Amount to Redeem'. </p>
        <p> 7. Select CBD Credit Card from 'Send to' option and click 'Redeem' OR Select CBD Account from 'Send to'
        option in case you do not have a CBD Credit Card. </p>
        <p> 8. Enter the One Time Password (OTP) sent to your registered Mobile Number. </p>

        <b> To redeem CBD Reward points as Charity through CBD Mobile App: </b>

        <p> 1. Login to CBD Mobile App. </p>
        <p> 2. Tap on 'More' and select 'Rewards' or Tap on 'Reward & offers' on dashboard menu. </p>
        <p> 3. Tap on 'Redeem' under 'Reward points'. </p>
        <p> 4. Tap on the 'Charity' option. </p>
        <p> 5. Enter amount in 'Amount to Redeem'. </p>
        <p> 6. Select charity from 'Send to' option and Tap 'Redeem'. </p>
        <p> 7. Enter the One Time Password (OTP) sent to your registered Mobile Number. </p>

        <b> To redeem CBD Reward points as Charity through CBD Online Banking: </b>

        <p> 1. Login to CBD Online Banking. </p>
        <p> 2. Click on 'CBD Rewards' on 'Overview' page </p>
        <p> 3. Click on 'Yes' to proceed to CBD Reward Portal. </p>
        <p> 4. Click on 'Redeem' under 'Reward points'. </p>
        <p> 5. Click on the 'Charity' option. </p>
        <p> 6. Enter amount in 'Amount to Redeem' </p>
        <p> 7. Select charity from 'Send to' option and click 'Redeem'. </p>
        <p> 8. Enter the One Time Password (OTP) sent to your registered Mobile Number. </p>

        <b> To redeem CBD Reward points as Skyward Miles through CBD Mobile App: </b>

        <p> 1. Login to CBD Mobile App. </p>
        <p> 2. Tap on 'More' and select 'Rewards' or Tap on 'Reward & offers' on dashboard menu. </p>
        <p> 3. Tap on 'Redeem' under 'Reward points'. </p>
        <p> 4. Tap on the 'Emirates Skywards' option under 'Miles'. </p>
        <p> 5. Enter First Name, Last Name, Skyward account # ,Number of miles to redeem and Tap 'Redeem'. </p>
        <p> 6. Enter the One Time Password (OTP) sent to your registered Mobile Number. </p>

        <b> To redeem CBD Reward points as Skyward Miles through CBD Online Banking: </b>

        <p> 1. Login to CBD Online Banking. </p>
        <p> 2. Click on 'CBD Rewards' on 'Overview' page </p>
        <p> 3. Click on 'Yes' to proceed to CBD Reward Portal. </p>
        <p> 4. Click on 'Redeem' under 'Reward points'. </p>
        <p> 5. Click on the 'Emirates Skywards' option under 'Miles'. </p>
        <p> 6. Enter First Name, Last Name, Skyward account # ,Number of miles to redeem and click 'Redeem'. </p>
        <p> 7. Enter the One Time Password (OTP) sent to your registered Mobile Number. </p>

        <b> To redeem CBD Reward points as Etihad Miles through CBD Mobile App: </b>

        <p> 1. Login to CBD Mobile App. </p>
        <p> 2. Tap on 'More' and select 'Rewards' or Tap on 'Reward & offers' on dashboard menu. </p>
        <p> 3. Tap on 'Redeem' under 'Reward points'. </p>
        <p> 4. Tap on the 'Etihad Guest Miles' option under 'Miles'. </p>
        <p> 5. Enter Account Name, Etihad account # ,Number of miles to redeem and click 'Redeem'. </p>
        <p> 6. Enter the One Time Password (OTP) sent to your registered Mobile Number. </p>

        <b> To redeem CBD Reward points as Etihad Miles through CBD Online Banking: </b>

        <p> 1. Login to CBD Online Banking. </p>
        <p> 2. Click on 'CBD Rewards' on 'Overview' page </p>
        <p> 3. Click on 'Yes' to proceed to CBD Reward Portal. </p>
        <p> 4. Click on 'Redeem' under 'Reward points'. </p>
        <p> 5. Click on the 'Etihad Guest Miles' option under 'Miles'. </p>
        <p> 6. Enter Account Name, Etihad account # ,Number of miles to redeem and click 'Redeem'. </p>
        <p> 7. Enter the One Time Password (OTP) sent to your registered Mobile Number. </p>

        <b> To redeem CBD Reward points to book a flight through CBD Mobile App: </b>

        <p> 1. Login to CBD Mobile App. </p>
        <p> 2. Tap on 'More' and select 'Rewards' or Tap on 'Reward & offers' on dashboard menu. </p>
        <p> 3. Tap on 'Redeem' under 'Reward points'. </p>
        <p> 4. Tap on the 'Flight' option under 'Travel'. </p>
        <p> 5. Fill up the details as requested and Tap 'Search flights'. </p>
        <p> 6. Choose the suitable flight and Tap 'Select'. </p>
        <p> 7. Review your flight information and Tap on 'Confirm'. </p>
        <p> 8. Enter Passenger information as requested and Tap on 'Confirm'. </p>
        <p> 9. In case of insufficient points to book a flight, you can purchase remaining points using CBD Credit Card to 
        complete the transaction by tapping 'Redeem'. </p>
        <p> 10. Enter the One Time Password (OTP) sent to your registered Mobile Number. </p>
        <p> 11. To confirm your flight booking, select 'Yes'. </p>

        <b> To redeem CBD Reward points to book a flight through CBD Online Banking: </b>

        <p> 1. Login to CBD Online Banking. </p>
        <p> 2. Click on 'CBD Rewards' on 'Overview' page </p>
        <p> 3. Click on 'Yes' to proceed to CBD Reward Portal. </p>
        <p> 4. Click on the 'Flight' option under 'Travel'. </p>
        <p> 5. Fill up the details as requested and click 'Search flights'. </p>
        <p> 6. Choose the suitable flight and click 'Select'. </p>
        <p> 7. Review your flight information and click on 'Confirm'. </p>
        <p> 8. Enter Passenger information as requested and click on 'Confirm'. </p>
        <p> 9. In case of insufficient points to book a flight, you can purchase remaining points using CBD Credit Card to 
        complete the transaction by clicking 'Redeem' . </p>
        <p> 10. Enter the One Time Password (OTP) sent to your registered Mobile Number. </p>
        <p> 11. To confirm your flight booking, select 'Yes'. </p>

        <b> To redeem CBD Reward points to book a Hotel through CBD Mobile App: </b>

        <p> 1. Login to CBD Mobile App. </p>
        <p> 2. Tap on 'More' and select 'Rewards' or Tap on 'Reward & offers' on dashboard menu. </p>
        <p> 3. Tap on 'Redeem' under 'Reward points'. </p>
        <p> 4. Tap on the 'Flight' option under 'Travel'. </p>
        <p> 5. Fill up the details as requested and Tap 'Search hotels'. </p>
        <p> 6. Choose the suitable hotel and Tap 'Select'. </p>
        <p> 7. Provide hotel Room selection and Tap 'Select'. </p>
        <p> 8. Enter Guest information as requested and Tap on 'Confirm'. </p>
        <p> 9. In case of insufficient points to book a Hotel, you can purchase remaining points using CBD Credit Card to 
        complete the transaction by tapping 'Redeem'. </p>
        <p> 10. Enter the One Time Password (OTP) sent to your registered Mobile Number. </p>
        <p> 11. To confirm your hotel booking, select 'Yes'. </p>

        <b> To redeem CBD Reward points to book a Hotel through CBD Online Banking: </b>

        <p> 1. Login to CBD Online Banking. </p>
        <p> 2. Click on 'CBD Rewards' on 'Overview' page </p>
        <p> 3. Click on 'Yes' to proceed to CBD Reward Portal. </p>
        <p> 4. Click on the 'Hotels' option under 'Travel'. </p>
        <p> 5. Click on the 'Hotels' option under 'Travel'. </p>
        <p> 6. Fill up the details as requested and click 'Search hotels'. </p>
        <p> 7. Choose the suitable Hotel by clicking 'Details'. </p>
        <p> 8. Provide Hotel Room selection and click 'Select'. </p>
        <p> 9. Review hotel booking details and click on 'Confirm'. </p>
        <p> 10. Enter Guest information as requested and click on 'Confirm'. </p>
        <p> 11. 	In case of insufficient points to book a Hotel, you can purchase remaining points using your CBD Credit 
        Card to complete the transaction by clicking 'Redeem' . </p>
        <p> 12. Enter the One Time Password (OTP) sent to your registered Mobile Number. </p>
        <p> 13. To confirm your hotel booking, select 'Yes'. </p>
          `,
      },
    ],
  },
];
