export const registerMFIResponse =
{
  response: {
    mfiId: '123',
    companyName: 'XYZ Enterprises',
    directorName: 'XYZ Director'
  }
}

export const registerMEResponse = {
  response: {
    "aadhar": "P7H999",
    "address": {
      "city": "string",
      "country": "string",
      "pinCode": "string",
      "streetName": "string",
      "unitNo": "string"
    },
    "businessExp": 0,
    "businessRegistered": true,
    "businessStartYear": "2019-08-20T23:21:53.123Z",
    "distBusinessToHome": 0,
    "dob": "2019-08-20T23:21:53.124Z",
    "drinker": true,
    "emiMonthly": 0,
    "firstName": "Bryan",
    "formalSavingsAccount": "string",
    "gender": "string",
    "highestEducation": "string",
    "householExp": 10000,
    "householdIncome": 12000,
    "id": "string",
    "incomeFromOtherSources": 0,
    "lastName": "Tan",
    "maritialStatus": "string",
    "mfiId": "string",
    "noOfEmployees": 10,
    "noOfNonEarningMembers": 0,
    "phoneBusiness": "string",
    "phoneHome": "string",
    "rent": 0,
    "smoker": true,
    "totalAssests": 0
  }

}

export const getAllMicroEntrepreneursResponse = {
  response: [
    {
      "aadhar": "P7H999",
      "address": {
        "city": "string",
        "country": "string",
        "pinCode": "string",
        "streetName": "string",
        "unitNo": "string"
      },
      "businessExp": 0,
      "businessRegistered": true,
      "businessStartYear": "2019-08-20T23:21:53.123Z",
      "distBusinessToHome": 0,
      "dob": "2019-08-20T23:21:53.124Z",
      "drinker": true,
      "emiMonthly": 0,
      "firstName": "Bryan",
      "formalSavingsAccount": "string",
      "gender": "string",
      "highestEducation": "string",
      "householExp": 10000,
      "householdIncome": 12000,
      "id": "string",
      "incomeFromOtherSources": 0,
      "lastName": "Tan",
      "maritialStatus": "string",
      "mfiId": "string",
      "noOfEmployees": 10,
      "noOfNonEarningMembers": 0,
      "phoneBusiness": "string",
      "phoneHome": "string",
      "rent": 0,
      "smoker": true,
      "totalAssests": 0
    },
    {
      "aadhar": "G867H78",
      "address": {
        "city": "string",
        "country": "string",
        "pinCode": "string",
        "streetName": "string",
        "unitNo": "string"
      },
      "businessExp": 0,
      "businessRegistered": true,
      "businessStartYear": "2019-08-20T23:21:53.123Z",
      "distBusinessToHome": 0,
      "dob": "2019-08-20T23:21:53.124Z",
      "drinker": true,
      "emiMonthly": 0,
      "firstName": "Hang",
      "formalSavingsAccount": "string",
      "gender": "string",
      "highestEducation": "string",
      "householExp": 2323,
      "householdIncome": 3333,
      "id": "string",
      "incomeFromOtherSources": 0,
      "lastName": "Peng",
      "maritialStatus": "string",
      "mfiId": "string",
      "noOfEmployees": 0,
      "noOfNonEarningMembers": 0,
      "phoneBusiness": "string",
      "phoneHome": "string",
      "rent": 0,
      "smoker": true,
      "totalAssests": 0
    }
  ]
}



export const getAllMFIs = {
  response:
    [
      {
        "address": {
          "city": "string",
          "country": "string",
          "pinCode": "string",
          "streetName": "string",
          "unitNo": "string"
        },
        "anyCasePendingInCourt": true,
        "borrowedFromBanks": true,
        "companyName": "string",
        "directorName": "string",
        "govtRegistrationNumber": "string",
        "id": "string",
        "netFundsOwned": "string",
        "operating": true,
        "reasonForApplication": "string",
        "registrationDate": "2019-08-20T23:21:53.145Z"
      }
    ]

}



export const saveLoanRepayment =
{
  response: {
    "loanId": "L123",
    "mfiId": "MFI345",
    "meId": "ME12",
    "product": {
      "productId": "P123",
      "productName": "P12F Fixed Interest 13%",
      "interestRate": "15",
      "tenure": "12",
    },
    "amount": "2322",
    "date": ""
  }
}



export const fetchTransactions = {
  response: {
    "mfiId": "MFI123",
    "loanDisbursements": [{
      "mfiId": "MFI123",
      "mfiName": "MFI-Grameen Institution",
      "meId": "ME-GG",
      "meName": "Gayathri Gavarraju",
      "loanId": "1",
      "loanAmount": "10000",
      "Date": "23/0/2009",
      //product details
      "productId": "P123",
      "productName": "P123 Fixed Interest 13%",
      "interestRate": "15",
      "tenure": "12"
    },
    {
      "mfiId": "MFI123",
      "mfiName": "MFI-Grameen Institution",
      "meId": "ME-PP",
      "meName": "Prithvi Kumar",
      "loanId": "2",
      "loanAmount": "2000000",
      "Date": "23/0/2016",
      //product details
      "productId": "P453",
      "productName": "P453 Floating SIBOR +5%",
      "interestRate": "5%",
      "tenure": "24"

    }
    ],
    "loanRepayments": [{
      "meId": "ME-GG",
      "loanId": "1",
      "loanAmount": 10000,
      "payment": 2000,
      "date": "23/0/2010",
      "productId": "P123",
      "productName": "P12F Fixed Interest 13%",
      "interestRate": 15,
      "tenure": "12"
    },
    {
      "meId": "ME-GG",
      "loanId": "1",
      "loanAmount": 10000,
      "payment": 1200,
      "date": "23/0/2011",
      "productId": "P123",
      "productName": "P12F Fixed Interest 13%",
      "interestRate": 12,
      "tenure": "12"
    }
    ]
  }
}


export function getLoggedInUserInfo(userId) {

  let userGroup = "";
  if (userId.startsWith("MFI")) {
    userGroup = "MFI"
  }
  else if (userId.startsWith("ME")) {
    userGroup = "ME"
  } else if (userId.startsWith("DBS")) {
    userGroup = "DBS"
  }

  switch (userGroup) {
    case "DBS":
      return {
        response : {
            userId:userId,
            userGroup:userGroup,
            entitlementLevel: "PERFORMER",
        }
      };
      
    case "MFI":
      return {
        response : {
          userId:userId,
          userGroup:userGroup,
          entitlementLevel: "PERFORMER",
      }
      };

    case "ME":
      return {
        response : {
          userId:userId,
          userGroup:userGroup,
          entitlementLevel: "PERFORMER",
      }
      };


    default:
      return {

      };


  }

}
