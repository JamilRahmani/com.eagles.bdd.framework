$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/laptop\u0026notebooks.feature");
formatter.feature({
  "line": 2,
  "name": "Laptop \u0026NoteBooks on Retail website",
  "description": "",
  "id": "laptop-\u0026notebooks-on-retail-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CompleteTest"
    }
  ]
});
formatter.before({
  "duration": 4181398400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDef.user_is_on_Retail_Website()"
});
formatter.result({
  "duration": 3359221600,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Add and Remove a Mac book from Cart",
  "description": "",
  "id": "laptop-\u0026notebooks-on-retail-website;add-and-remove-a-mac-book-from-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@AddAndRemoveMac"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User click on Laptop \u0026NoteBook tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User click on Show all Laptop \u0026NoteBook option",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on MacBook  item",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should see a message ‘Success: You have added MacBook to your shopping cart!’",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User should see \u00271 tem(s)-602.00\u0027 showed to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on cart option",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user click on red X button to remove the item from cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "item should be removed and cart should show \u00270 item(s)\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "JamilLaptopsNoteBooksStepDef.user_click_on_Laptop_NoteBook_tab()"
});
formatter.result({
  "duration": 139087700,
  "status": "passed"
});
formatter.match({
  "location": "JamilLaptopsNoteBooksStepDef.user_click_on_Show_all_Laptop_NoteBook_option()"
});
formatter.result({
  "duration": 1203111500,
  "status": "passed"
});
formatter.match({
  "location": "JamilLaptopsNoteBooksStepDef.user_click_on_MacBook_item()"
});
formatter.result({
  "duration": 5447847800,
  "status": "passed"
});
formatter.match({
  "location": "JamilLaptopsNoteBooksStepDef.user_click_add_to_Cart_button()"
});
formatter.result({
  "duration": 5105091500,
  "status": "passed"
});
formatter.match({
  "location": "JamilLaptopsNoteBooksStepDef.user_should_see_a_message_Success_You_have_added_MacBook_to_your_shopping_cart()"
});
formatter.result({
  "duration": 231040900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 tem(s)-602.00",
      "offset": 17
    }
  ],
  "location": "JamilLaptopsNoteBooksStepDef.user_should_see_tem_s_showed_to_the_cart(String)"
});
formatter.result({
  "duration": 66571600,
  "status": "passed"
});
formatter.match({
  "location": "JamilLaptopsNoteBooksStepDef.user_click_on_cart_option()"
});
formatter.result({
  "duration": 78886000,
  "status": "passed"
});
formatter.match({
  "location": "JamilLaptopsNoteBooksStepDef.user_click_on_red_X_button_to_remove_the_item_from_cart()"
});
formatter.result({
  "duration": 5361133700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0 item(s)",
      "offset": 45
    }
  ],
  "location": "JamilLaptopsNoteBooksStepDef.item_should_be_removed_and_cart_should_show_item_s(String)"
});
formatter.result({
  "duration": 5056970900,
  "status": "passed"
});
formatter.after({
  "duration": 863868700,
  "status": "passed"
});
});