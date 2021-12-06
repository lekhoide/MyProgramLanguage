/**
 * Todo
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */

var loop = true;
var fs = require('fs');
var readlineSync = require('readline-sync');

var contacts = [];

function loadData() {
    var fileContent = fs.readFileSync('./info.json');
    contacts = JSON.parse(fileContent);
}

function showContacts() {
    for (var contact of contacts) {
        console.log(contact);
    }
}

function showCreateContact() {
    var name = readlineSync.question('Name: ');
    var phoneNumber = readlineSync.question('Phone Number: ');
    var contact = {
        name: name,
        phoneNumber: parseInt(phoneNumber)
    };
    contacts.push(contact);
}

function saveAndExit() {
    var content = JSON.stringify(contacts);
    fs.writeFileSync('./info.json', content, { encoding: 'utf8' });
    loop = false;
    console.log('Save success. Goodbye!')
}

function showEditContact() {
    contacts.forEach(function (item, index, array) {
        console.log('ID %d', index, item);
    })
    var chooseContact = readlineSync.question('Select ID to edit: ');
    contacts[chooseContact].name = readlineSync.question('Edit name: ');
    contacts[chooseContact].phoneNumber = readlineSync.question('Edit phone number: ');
}

function showDeleteContact() {
    contacts.forEach(function (item, index, array) {
        console.log('ID %d', index, item);
    })
    var chooseContact = readlineSync.question('Select ID to delete: ');
    contacts.splice(contacts[chooseContact].name, chooseContact);
    console.log('Delete Success!');
}

function showSearchContact() {
    contacts.forEach(function (item, index, array) {
        console.log('ID %d', index, item);
    })
    var find = readlineSync.question('Search: ');
    var contactFind = contacts.find(function (item, index) {
        if (find === item.name) {
            console.log('ID %d', index, item);
        } else if (find === item.phoneNumber) {
            console.log('ID %d', index, item);
        }
    });
}

function showMenu() {
    var options = [
        'Show all contacts',
        'Create a new contact',
        'Save & Exit',
        'Edit contact',
        'Delete contact',
        'Search contact'
    ];
    while (loop == true) {
        var chooseOption = readlineSync.keyInSelect(options, 'Choose option', null, { cancel: 'No $<lastItem>' });
        switch (chooseOption) {
            case 0:
                showContacts();
                break;
            case 1:
                showCreateContact();
                break;
            case 2:
                saveAndExit();
                break;
            case 3:
                showEditContact();
                break;
            case 4:
                showDeleteContact();
                break;
            case 5:
                showSearchContact();
                break;
            case -1:
                loop = false;
                console.log('Goodbye!');
                break;
            default:
                console.log('Wrong option');
                break;
        }
    }
}

function main() {
    loadData();
    showMenu();
}

main();