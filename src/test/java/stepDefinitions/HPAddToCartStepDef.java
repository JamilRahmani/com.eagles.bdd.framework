package stepDefinitions;

import org.junit.Assert;

import core.Base;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjectRepository.DestopsPageObject;
import utilities.WebDriverUtility;

public class HPAddToCartStepDef extends Base {

	DestopsPageObject hp = new DestopsPageObject();

	@When("^User click  ADD TO CART option on ‘HP LP(\\d+)’ item$")
	public void user_click_ADD_TO_CART_option_on_HP_LP_item(int arg1) {
		hp.clickOnAddToCartHPLP3065();
		logger.info("User clicked on ADD TO CART");
	}

	@When("^User select quantity (\\d+)$")
	public void user_select_quantity(int arg1) {
		hp.userAddQuantity();
		logger.info("User passed the select quantity");
	}

	@When("^user click add to Cart button$")
	public void user_click_add_to_Cart_button() throws InterruptedException {
		hp.clickOnAddToCartLastTime();
		logger.info("User clicked on ADD TO CART");
		Thread.sleep(2000);
	}

	@Then("^User should see a message ‘Success: you have added HP LP to your Shopping cart!’$")
	public void user_should_see_a_message_Success_you_have_added_HP_LP_to_your_Shopping_cart() {

		String actualMessage = "Success: you have added HP LP to your Shopping cart!";
		String expectedMessage = hp.UserSeeSuccessMessage();
		
		Assert.assertEquals(expectedMessage.substring(0, 7), actualMessage.substring(0, 7));
		WebDriverUtility.screenShot();
		logger.info("Success message displayed");
		//System.out.println(hp.UserSeeSuccessMessage());

	}

}
