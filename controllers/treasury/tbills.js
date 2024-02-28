const asynHandler = require("../../middleware/async");
const { sendResponse, CatchHistory } = require("../../helper/utilfunc");
const GlobalModel = require("../../model/Global");
const { autoProcessServiceToken } = require("../../helper/autoCreateEnrollment");
const systemDate = new Date().toISOString().slice(0, 19).replace("T", " ");

exports.SearchCustomer = asynHandler(async (req, res, next) => {

    let customer= [
        {
          id: 90,
          client_prefix: '0000000384879',
          client_suffix: 'LI',
          title: 'MR',
          initials: 'JOT',
          surname: 'OFORI-TEIKO',
          other_names: 'JOSEPH',
          accountnumber: '021010008511'
        }
      ]
    return sendResponse(res, 1, 200, "Customer record found", customer)

})

exports.ViewAdvices = asynHandler(async (req, res, next) => {

    let advice = 
    [ {
        id: 65547,
        tenderno: '1597',
        membercode: 'CAL',
        clientprefix: '384879',
        clientsuffix: 'LI',
        debittype: 'BL',
        debitdescription: '07/01/19-A4776-1597',
        shortname: '182-DAY T/B 1597',
        competitive: '1',
        maturityvalue: 173856,
        amountallotted: 173856,
        allottedrate: 12.5,
        accountno: '011010008516',
        bankname: 'CAL BANK',
        bankshortcode: '140101',
        branchname: 'ACCRA',
        auctionid: 'null',
        cashacctype: 'null',
        terms: 'null'
      },
       {
        id: 65741,
        tenderno: '1599',
        membercode: 'CAL',
        clientprefix: '384879',
        clientsuffix: 'LI',
        debittype: 'BL',
        debitdescription: '22/10/18-A4786-1599',
        shortname: '91-DAY T/B 1599',
        competitive: '1',
        maturityvalue: 103196,
        amountallotted: 103196,
        allottedrate: 12.3,
        accountno: '011010008516',
        bankname: 'CAL BANK',
        bankshortcode: '140101',
        branchname: 'ACCRA',
        auctionid: 'null',
        cashacctype: 'null',
        terms: 'null'
      },
       {
        id: 66524,
        tenderno: '1599',
        membercode: 'CAL',
        clientprefix: '384879',
        clientsuffix: 'LI',
        debittype: 'BL',
        debitdescription: '21/01/19-A4787-1599',
        shortname: '182-DAY T/B 1599',
        competitive: '1',
        maturityvalue: 51793,
        amountallotted: 51793,
        allottedrate: 12.5,
        accountno: '011010008516',
        bankname: 'CAL BANK',
        bankshortcode: '140101',
        branchname: 'ACCRA',
        auctionid: 'null',
        cashacctype: 'null',
        terms: 'null'
      }
    ]
    return sendResponse(res, 1, 200, "Customer advice record found", advice)
})

exports.PrintInvoice = asynHandler(async (req, res, next) => {
  
    let invoice = [
         {
          registration_id: 90,
          member_code: 'CAL-P',
          client_prefix: '0000000384879',
          client_suffix: 'LI',
          title: 'MR',
          initials: 'JOT',
          surname: 'OFORI-TEIKO',
          other_names: 'JOSEPH',
          address: 'C/O CAL BANK LTD. P. O. BOX 14596 ',
          date_added: "2016-08-02T00:00:00.000Z",
          added_by: 'esarfo-frimpong',
          customerid: '',
          accountnumber: '021010008511'
        },
      
      
         {
          registration_id: 90,
          member_code: 'CAL-P',
          client_prefix: '0000000384879',
          client_suffix: 'LI',
          title: 'MR',
          initials: 'JOT',
          surname: 'OFORI-TEIKO',
          other_names: 'JOSEPH',
          address: 'C/O CAL BANK LTD. P. O. BOX 14596 ',
          date_added: "2016-08-02T00:00:00.000Z",
          added_by: 'esarfo-frimpong',
          customerid: '',
          accountnumber: '021010008511'
        }
      ]
      return sendResponse(res, 1, 200, "Customer advice record found", invoice)

})




