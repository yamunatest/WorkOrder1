  const{test ,expect } = require('@playwright/test')

test('Loigin Page', async ({page})=>{
 await page.goto('https://untangled.cloudtesla.com/auth/login')
  var pageTitle=await page.title();
  console.log('page tile is:',pageTitle);
   var pageUrl=await page.url();
   console.log('page URL is :',pageUrl);
  await expect(page).toHaveTitle("Untangled Pro, 'Simplify operations, boost efficiency, and achieve service excellence'");
  await expect(page).toHaveURL('https://untangled.cloudtesla.com/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('yamuna_testclient');
      await page.getByRole('textbox', { name: 'Password' }).fill('Login@123'); 
      await page.getByRole('button', { name: 'Continue' }).click();
await page.locator('div.input-group input').fill('Work Order1')
await page.locator('div.fs-2.fw-bolder').click()
//handing i frame
const frame = page.frameLocator('iframe');
await frame.getByRole('button', { name: 'Add' }).click();
//enter the text fields input
const texts = ['Mechanical', 'Electrical', 'Testing', 'Dashboard', 'Automation'];

const randomText = texts[Math.floor(Math.random() * texts.length)];

await frame.locator('#text-1770717231658').fill(randomText);
//enter the number field input
const numbers = ['0.345', '300', '20', '45.6798', '090'];

const randomNumber =  numbers[Math.floor(Math.random() * numbers.length)];

await frame.locator('#number-1770717233967').fill(randomNumber);

// select the multi-selct option
await frame.locator('textarea.select2-search__field').click()

const options1 = frame.locator('//span/ul/li');
const count1 = await options1.count();

const selectedIndexes = new Set();

while (selectedIndexes.size < 2) {
    selectedIndexes.add(Math.floor(Math.random() * count1));
}

for (const index of selectedIndexes) {
    await options1.nth(index).click();
}
//select the single selct options
await frame.locator('#select2-single-select-1770717240340-container').click()
const options = frame.locator('//span/ul/li');
const count = await options.count();

const randomIndex = Math.floor(Math.random() * count);

await options.nth(randomIndex).click();

await page.waitForTimeout(1000)
//await frame.locator('textarea.select2-search__field').click()
//await frame.locator("//span[@role='combobox'])[3]").click()

await page.waitForTimeout(3000);

const date = new Date();

const yyyy = date.getFullYear();
const mm = String(date.getMonth() + 1).padStart(2, '0');
const dd = String(date.getDate()).padStart(2, '0');
const hh = String(date.getHours()).padStart(2, '0');
const min = String(date.getMinutes()).padStart(2, '0');

await page
  .locator("locator('input[type='datetime-local']")
  .fill(`${yyyy}-${mm}-${dd}T${hh}:${min}`);
await page.waitForTimeout(3000);
await frame.locator('#kt_modal_add_customer_submit').click()

await frame.getByText('Ok, got it!').click()

await page.waitForTimeout(3000)
console.log("this is my first project")
  await page.close();
})