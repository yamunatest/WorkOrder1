# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.js >> Untangled Pro - Work Order form >> Login and submit a Work Order form
- Location: tests/Login.spec.js:6:3

# Error details

```
Error: locator.fill: Error: strict mode violation: locator('input[type="datetime-local"]') resolved to 4 elements:
    1) <input id="fromDate" name="fromDate" type="datetime-local" placeholder="Select date" class="form-control form-control-solid"/> aka locator('#fromDate')
    2) <input id="toDate" name="toDate" type="datetime-local" placeholder="Select date" class="form-control form-control-solid"/> aka locator('#toDate')
    3) <input value="" data-raw-value="" type="datetime-local" placeholder="Enter..." title="25/10/2026, 1:59 PM" id="datetime-local-1770717244149" name="datetime-local-1770717244149" class="input-field form-control scroll-focus focus-input"/> aka getByRole('textbox', { name: '/10/2026, 1:59 PM' })
    4) <input value="" data-raw-value="" type="datetime-local" placeholder="Enter..." id="epoch-datetime-local-1777522812844" name="epoch-datetime-local-1777522812844" class="input-field form-control scroll-focus focus-input"/> aka locator('#epoch-datetime-local-1777522812844')

Call log:
  - waiting for locator('iframe').contentFrame().locator('input[type="datetime-local"]')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e8]:
    - generic [ref=e9]:
      - link [ref=e11] [cursor=pointer]:
        - /url: /dashboard
        - img "Logo" [ref=e12]
      - generic [ref=e15]:
        - link "    Dashboard" [ref=e17] [cursor=pointer]:
          - /url: /dashboard
          - generic [ref=e20]:
            - generic [ref=e21]: 
            - generic: 
            - generic: 
            - generic: 
          - generic [ref=e22]: Dashboard
        - link " Summary Dashboard" [ref=e24] [cursor=pointer]:
          - /url: /summary-engine
          - generic [ref=e25]: 
          - generic [ref=e27]: Summary Dashboard
      - generic [ref=e29] [cursor=pointer]
    - iframe [active] [ref=e32]:
      - generic [ref=f1e1]:
        - generic [ref=f1e7]:
          - generic:
            - generic [ref=f1e8]:
              - generic [ref=f1e9]:
                - heading "Work Order1" [level=1] [ref=f1e10]
                - text: 
              - generic [ref=f1e12]:
                - generic [ref=f1e13]: Choose Form 
                - combobox [aria-hidden] [ref=f1e14]
                - combobox [ref=f1e17] [cursor=pointer]:
                  - button "Remove all items" [ref=f1e18]
                  - textbox "Work Order1" [ref=f1e19]
                - generic [ref=f1e20]:
                  - link "Manage " [ref=f1e22] [cursor=pointer]:
                    - /url: "#"
                    - text: Manage
                    - generic [ref=f1e23]: 
                  - button " Search" [ref=f1e24] [cursor=pointer]:
                    - generic [ref=f1e25]:
                      - generic [ref=f1e26]: 
                      - generic [ref=f1e27]: Search
                  - text: 
                  - button "+ Add" [ref=f1e28] [cursor=pointer]:
                    - generic [ref=f1e29]:
                      - generic [ref=f1e30]: +
                      - text: Add
                  - text: 
              - text:                                 
              - generic [ref=f1e32]:
                - table [ref=f1e34]:
                  - rowgroup [ref=f1e35]:
                    - row [ref=f1e36]:
                      - 'columnheader "WOIDreytwrtufrikvbtivkhbrtiwvksjb gbsfdv: activate to sort column ascending" [ref=f1e37] [cursor=pointer]': WOIDreytwrtufrikvbtivkhbrtiwvksjb gbsfdv
                      - 'columnheader "Number: activate to sort column ascending" [ref=f1e38] [cursor=pointer]': Number
                      - 'columnheader "Multi Select: activate to sort column ascending" [ref=f1e39] [cursor=pointer]': Multi Select
                      - 'columnheader "Status: activate to sort column ascending" [ref=f1e40] [cursor=pointer]': Status
                      - 'columnheader "Datetime-local: activate to sort column ascending" [ref=f1e41] [cursor=pointer]': Datetime-local
                      - 'columnheader "Date: activate to sort column ascending" [ref=f1e42] [cursor=pointer]': Date
                      - 'columnheader "Updated Time: activate to sort column ascending" [ref=f1e43] [cursor=pointer]': Updated Time
                      - 'columnheader "Updated Person: activate to sort column ascending" [ref=f1e44] [cursor=pointer]': Updated Person
                      - columnheader "Actions" [ref=f1e45]
                  - rowgroup [ref=f1e46]:
                    - row [ref=f1e47]:
                      - cell "N/A" [ref=f1e48] [cursor=pointer]
                      - cell "89" [ref=f1e49]
                      - cell "10.98,90" [ref=f1e50]
                      - cell "StartTravel" [ref=f1e51]
                      - cell "25/10/2026, 12:00 am" [ref=f1e52]
                      - cell "10/25/2026" [ref=f1e53]
                      - cell "25/10/2026, 12:00 am" [ref=f1e54]
                      - cell "cco" [ref=f1e55]
                      - cell [ref=f1e56]:
                        - link "Actions " [ref=f1e57] [cursor=pointer]:
                          - /url: "#"
                          - text: Actions
                          - generic [ref=f1e58]: 
                    - row [ref=f1e59]:
                      - cell "N/A" [ref=f1e60] [cursor=pointer]
                      - cell "91" [ref=f1e61]
                      - cell "3.50,40" [ref=f1e62]
                      - cell "Resolved" [ref=f1e63]
                      - cell "24/10/2026, 12:00 am" [ref=f1e64]
                      - cell "10/24/2026" [ref=f1e65]
                      - cell "24/10/2026, 12:00 am" [ref=f1e66]
                      - cell "cco" [ref=f1e67]
                      - cell [ref=f1e68]:
                        - link "Actions " [ref=f1e69] [cursor=pointer]:
                          - /url: "#"
                          - text: Actions
                          - generic [ref=f1e70]: 
                    - row [ref=f1e71]:
                      - cell "Electrical" [ref=f1e72] [cursor=pointer]
                      - cell "20" [ref=f1e73]
                      - cell "N/A" [ref=f1e74]
                      - cell "EndTravel" [ref=f1e75]
                      - cell "23/10/2026, 11:04 am" [ref=f1e76]
                      - cell "10/23/2026" [ref=f1e77]
                      - cell "23/10/2026, 11:04 am" [ref=f1e78]
                      - cell "yamuna_testclient" [ref=f1e79]
                      - cell [ref=f1e80]:
                        - link "Actions " [ref=f1e81] [cursor=pointer]:
                          - /url: "#"
                          - text: Actions
                          - generic [ref=f1e82]: 
                    - row [ref=f1e83]:
                      - cell "N/A" [ref=f1e84] [cursor=pointer]
                      - cell "79" [ref=f1e85]
                      - cell "3.50,10.98" [ref=f1e86]
                      - cell "Closed" [ref=f1e87]
                      - cell "23/10/2026, 12:00 am" [ref=f1e88]
                      - cell "10/23/2026" [ref=f1e89]
                      - cell "23/10/2026, 12:00 am" [ref=f1e90]
                      - cell "cco" [ref=f1e91]
                      - cell [ref=f1e92]:
                        - link "Actions " [ref=f1e93] [cursor=pointer]:
                          - /url: "#"
                          - text: Actions
                          - generic [ref=f1e94]: 
                    - row [ref=f1e95]:
                      - cell "N/A" [ref=f1e96] [cursor=pointer]
                      - cell "N/A" [ref=f1e97]
                      - cell "N/A" [ref=f1e98]
                      - cell "N/A" [ref=f1e99]
                      - cell "22/10/2026, 10:12 am" [ref=f1e100]
                      - cell "10/22/2026" [ref=f1e101]
                      - cell "22/10/2026, 10:12 am" [ref=f1e102]
                      - cell "cco" [ref=f1e103]
                      - cell [ref=f1e104]:
                        - link "Actions " [ref=f1e105] [cursor=pointer]:
                          - /url: "#"
                          - text: Actions
                          - generic [ref=f1e106]: 
                    - row [ref=f1e107]:
                      - cell "N/A" [ref=f1e108] [cursor=pointer]
                      - cell "N/A" [ref=f1e109]
                      - cell "N/A" [ref=f1e110]
                      - cell "N/A" [ref=f1e111]
                      - cell "22/10/2026, 10:11 am" [ref=f1e112]
                      - cell "10/22/2026" [ref=f1e113]
                      - cell "22/10/2026, 10:11 am" [ref=f1e114]
                      - cell "cco" [ref=f1e115]
                      - cell [ref=f1e116]:
                        - link "Actions " [ref=f1e117] [cursor=pointer]:
                          - /url: "#"
                          - text: Actions
                          - generic [ref=f1e118]: 
                    - row [ref=f1e119]:
                      - cell "N/A" [ref=f1e120] [cursor=pointer]
                      - cell "N/A" [ref=f1e121]
                      - cell "N/A" [ref=f1e122]
                      - cell "N/A" [ref=f1e123]
                      - cell "22/10/2026, 10:10 am" [ref=f1e124]
                      - cell "10/22/2026" [ref=f1e125]
                      - cell "22/10/2026, 10:10 am" [ref=f1e126]
                      - cell "cco" [ref=f1e127]
                      - cell [ref=f1e128]:
                        - link "Actions " [ref=f1e129] [cursor=pointer]:
                          - /url: "#"
                          - text: Actions
                          - generic [ref=f1e130]: 
                    - row [ref=f1e131]:
                      - cell "N/A" [ref=f1e132] [cursor=pointer]
                      - cell "75" [ref=f1e133]
                      - cell "200,90" [ref=f1e134]
                      - cell "InProgress" [ref=f1e135]
                      - cell "22/10/2026, 12:00 am" [ref=f1e136]
                      - cell "10/22/2026" [ref=f1e137]
                      - cell "22/10/2026, 12:00 am" [ref=f1e138]
                      - cell "cco" [ref=f1e139]
                      - cell [ref=f1e140]:
                        - link "Actions " [ref=f1e141] [cursor=pointer]:
                          - /url: "#"
                          - text: Actions
                          - generic [ref=f1e142]: 
                    - row [ref=f1e143]:
                      - cell "N/A" [ref=f1e144] [cursor=pointer]
                      - cell "N/A" [ref=f1e145]
                      - cell "N/A" [ref=f1e146]
                      - cell "N/A" [ref=f1e147]
                      - cell "21/10/2026, 10:12 am" [ref=f1e148]
                      - cell "10/21/2026" [ref=f1e149]
                      - cell "21/10/2026, 10:13 am" [ref=f1e150]
                      - cell "cco" [ref=f1e151]
                      - cell [ref=f1e152]:
                        - link "Actions " [ref=f1e153] [cursor=pointer]:
                          - /url: "#"
                          - text: Actions
                          - generic [ref=f1e154]: 
                    - row [ref=f1e155]:
                      - cell "N/A" [ref=f1e156] [cursor=pointer]
                      - cell "N/A" [ref=f1e157]
                      - cell "N/A" [ref=f1e158]
                      - cell "N/A" [ref=f1e159]
                      - cell "21/10/2026, 10:11 am" [ref=f1e160]
                      - cell "10/21/2026" [ref=f1e161]
                      - cell "21/10/2026, 10:11 am" [ref=f1e162]
                      - cell "cco" [ref=f1e163]
                      - cell [ref=f1e164]:
                        - link "Actions " [ref=f1e165] [cursor=pointer]:
                          - /url: "#"
                          - text: Actions
                          - generic [ref=f1e166]: 
                - generic [ref=f1e167]:
                  - generic [ref=f1e168]:
                    - generic [ref=f1e170]:
                      - text: Show
                      - combobox "Show Entries" [ref=f1e171]:
                        - option "10" [selected]
                        - option "20"
                        - option "30"
                        - option "40"
                        - option "50"
                        - option "100"
                      - text: Entries
                    - status [ref=f1e172]:
                      - text: Showing 1 to 10 of
                      - button "Many" [ref=f1e173] [cursor=pointer]
                      - text: Entries
                  - list [ref=f1e176]:
                    - listitem [ref=f1e177]:
                      - link "Previous":
                        - /url: "#"
                    - listitem [ref=f1e178]:
                      - link "1" [ref=f1e179] [cursor=pointer]:
                        - /url: "#"
                    - listitem [ref=f1e180]:
                      - link "Next" [ref=f1e181] [cursor=pointer]:
                        - /url: "#"
            - dialog [ref=f1e182]:
              - generic [ref=f1e184]:
                - generic [ref=f1e185]:
                  - generic [ref=f1e186]:
                    - generic [ref=f1e187]: Add Work Order1
                    - generic:  
                  - generic [ref=f1e188]:
                    - text:   
                    - button "" [ref=f1e189] [cursor=pointer]
                - generic [ref=f1e192]:
                  - generic [ref=f1e194]:
                    - generic [ref=f1e195]:
                      - generic [ref=f1e196]:
                        - generic [ref=f1e197]: WOIDreytwrtufrikvbtivkhbrtiwvksjb gbsfdv
                        - textbox "Dashboard" [ref=f1e198]:
                          - /placeholder: Enter text...
                      - generic [ref=f1e199]:
                        - generic [ref=f1e200]: Number
                        - spinbutton "090" [ref=f1e201]
                      - generic [ref=f1e202]:
                        - generic [ref=f1e203]: Multi Select
                        - listbox [aria-hidden] [ref=f1e204]:
                          - option [ref=f1e205]: Select All
                          - option [selected] [ref=f1e206]: "200"
                          - option [ref=f1e207]: "3.50"
                          - option [ref=f1e208]: "10.98"
                          - option [ref=f1e209]: "40"
                          - option [selected] [ref=f1e210]: "90"
                        - combobox [ref=f1e213] [cursor=pointer]:
                          - button "Remove all items" [ref=f1e214]
                          - list [ref=f1e215]:
                            - listitem "200" [ref=f1e216]:
                              - button "Remove item" [ref=f1e217]
                            - listitem "90" [ref=f1e219]:
                              - button "Remove item" [ref=f1e220]
                          - searchbox "Search" [ref=f1e223]
                      - generic [ref=f1e224]:
                        - generic [ref=f1e225]: Status
                        - combobox [aria-hidden] [ref=f1e226]
                        - combobox [active] [ref=f1e229] [cursor=pointer]:
                          - button "Remove all items" [ref=f1e230]
                          - textbox "EndTravel" [ref=f1e231]
                      - generic [ref=f1e232]:
                        - generic [ref=f1e233]: Datetime-local *
                        - textbox "25/10/2026, 1:59 PM" [ref=f1e234]:
                          - /placeholder: Enter...
                          - text: 2026-10-25T13:59
                      - generic [ref=f1e235]:
                        - generic [ref=f1e236]: Epoch-datetime-local
                        - textbox [ref=f1e237]:
                          - /placeholder: Enter...
                    - generic [ref=f1e239]:
                      - generic [ref=f1e240]: Date
                      - textbox "25/10/2026" [ref=f1e241]:
                        - /placeholder: Enter...
                        - text: 2026-10-25
                  - text:        * 
                - generic [ref=f1e242]:
                  - button "Submit" [ref=f1e243] [cursor=pointer]
                  - button "Add Draft" [ref=f1e244] [cursor=pointer]
                  - button "Discard" [ref=f1e245] [cursor=pointer]
                  - button "Validate Form" [ref=f1e246] [cursor=pointer]
                  - text:  
            - text:  +    *                   
        - text: 
  - text:  
  - generic [ref=e34]:
    - generic [ref=e35]:
      - heading "Activity Logs" [level=3] [ref=e36]
      - button " " [ref=e38] [cursor=pointer]:
        - generic [ref=e40]:
          - generic [ref=e41]: 
          - generic: 
    - generic [ref=e44]:
      - generic [ref=e45]:
        - generic [ref=e50]:
          - generic [ref=e51]: 
          - generic: 
          - generic: 
        - generic [ref=e52]:
          - generic [ref=e53]:
            - generic [ref=e54]: "There are 2 new tasks for you in “AirPlus Mobile APp” project:"
            - generic [ref=e55]:
              - generic [ref=e56]: Added at 4:23 PM by
              - generic "Nina Nilson"
          - generic [ref=e57]:
            - generic [ref=e58]:
              - generic [ref=e59] [cursor=pointer]: Meeting with customer
              - generic [ref=e60]: Application Design
              - generic [ref=e62]: A
              - generic [ref=e65]: In Progress
              - generic [ref=e67] [cursor=pointer]: View
            - generic [ref=e68]:
              - generic [ref=e69] [cursor=pointer]: Project Delivery Preparation
              - generic [ref=e70]: CRM System Development
              - generic [ref=e72]: B
              - generic [ref=e75]: Completed
              - generic [ref=e77] [cursor=pointer]: View
      - generic [ref=e78]:
        - generic [ref=e83]:
          - generic [ref=e84]: 
          - generic: 
          - generic: 
        - generic [ref=e86]:
          - generic [ref=e87]: Invitation for crafting engaging designs that speak human workshop
          - generic [ref=e88]:
            - generic [ref=e89]: Sent at 4:23 PM by
            - generic "Alan Nilson"
      - generic [ref=e90]:
        - generic [ref=e95]:
          - generic [ref=e96]: 
          - generic: 
          - generic: 
          - generic: 
          - generic: 
        - generic [ref=e97]:
          - generic [ref=e98]:
            - text: "3 New Incoming Project Files:"
            - generic [ref=e99]:
              - generic [ref=e100]: Sent at 10:30 PM by
              - generic "Jan Hummer"
          - generic [ref=e102]:
            - generic [ref=e104]:
              - text: Finance KPI App Guidelines
              - generic [ref=e105]: 1.9mb
            - generic [ref=e107]:
              - text: Client UAT Testing Results
              - generic [ref=e108]: 18kb
            - generic [ref=e110]:
              - text: Finance Reports
              - generic [ref=e111]: 20mb
      - generic [ref=e112]:
        - generic [ref=e117]:
          - generic [ref=e118]: 
          - generic: 
        - generic [ref=e120]:
          - generic [ref=e121]: "Task #45890 merged with #45890 in “Ads Pro Admin Dashboard project:"
          - generic [ref=e122]:
            - generic [ref=e123]: Initiated at 4:23 PM by
            - generic "Nina Nilson"
      - generic [ref=e124]:
        - generic [ref=e129]:
          - generic [ref=e130]: 
          - generic: 
        - generic [ref=e131]:
          - generic [ref=e132]:
            - generic [ref=e133]: "3 new application design concepts added:"
            - generic [ref=e134]:
              - generic [ref=e135]: Created at 4:23 PM by
              - generic "Marcus Dotson"
          - generic [ref=e137]:
            - generic: Explore
            - generic: Explore
            - generic: Explore
      - generic [ref=e141]:
        - generic [ref=e146]:
          - generic [ref=e147]: 
          - generic: 
        - generic [ref=e149]:
          - generic [ref=e150]: "New case #67890 is assigned to you in Multi-platform Database Design project"
          - generic [ref=e152]:
            - generic [ref=e153]: Added at 4:23 PM by
            - generic [ref=e154] [cursor=pointer]: Alice Tan
      - generic [ref=e155]:
        - generic [ref=e160]:
          - generic [ref=e161]: 
          - generic: 
        - generic [ref=e162]:
          - generic [ref=e163]:
            - generic [ref=e164]: "You have received a new order:"
            - generic [ref=e165]:
              - generic [ref=e166]: Placed at 5:05 AM by
              - generic "Robert Rich"
          - generic [ref=e169]:
            - generic [ref=e170]:
              - heading "Database Backup Process Completed!" [level=4] [ref=e171]
              - generic [ref=e172]: Login into Metronic Admin Dashboard to make sure the data integrity is OK
            - generic [ref=e173] [cursor=pointer]: Proceed
      - generic [ref=e174]:
        - generic [ref=e178]:
          - generic [ref=e179]: 
          - generic: 
          - generic: 
          - generic: 
        - generic [ref=e181]:
          - generic [ref=e182]: "New order #67890 is placed for Workshow Planning & Budget Estimation"
          - generic [ref=e183]:
            - generic [ref=e184]: Placed at 4:23 PM by
            - generic [ref=e185] [cursor=pointer]: Jimmy Bold
    - generic [ref=e187] [cursor=pointer]:
      - text: View All Activities
      - generic [ref=e189]:
        - generic [ref=e190]: 
        - generic: 
  - generic [ref=e193]:
    - generic [ref=e195]:
      - generic [ref=e196] [cursor=pointer]: Brian Cox
      - generic [ref=e197]: Active
    - generic [ref=e199]:
      - button "" [ref=e201] [cursor=pointer]
      - generic [ref=e205] [cursor=pointer]:
        - generic [ref=e206]: 
        - generic: 
  - generic:
    - generic [ref=e209]:
      - generic [ref=e210]:
        - heading "Explore" [level=3] [ref=e211]
        - button " " [ref=e213] [cursor=pointer]:
          - generic [ref=e215]:
            - generic [ref=e216]: 
            - generic: 
      - generic [ref=e219]:
        - generic [ref=e221]:
          - heading "Metronic Licenses" [level=3] [ref=e222]
          - link "License FAQs" [ref=e223] [cursor=pointer]:
            - /url: https://themeforest.net/licenses/standard
        - generic [ref=e225]:
          - generic [ref=e226]:
            - generic [ref=e227]:
              - generic [ref=e228]: Regular License
              - generic [ref=e229]: 
            - generic [ref=e230]: For single end product used by you or one client
          - generic [ref=e231]: $39
        - generic [ref=e233]:
          - generic [ref=e234]:
            - generic [ref=e235]:
              - generic [ref=e236]: Extended License
              - generic [ref=e237]: 
            - generic [ref=e238]: For single end product with paying users.
          - generic [ref=e239]: $939
        - generic [ref=e241]:
          - generic [ref=e242]:
            - generic [ref=e243]: Custom License
            - generic [ref=e245]: Reach us for custom license offers.
          - link "Contact Us" [ref=e247] [cursor=pointer]:
            - /url: https://keenthemes.com/contact/
        - link "Buy Now" [ref=e248] [cursor=pointer]:
          - /url: https://1.envato.market/EA4JP
        - generic [ref=e249]:
          - heading "Metronic Demos" [level=3] [ref=e250]
          - generic [ref=e253]:
            - img "demo" [ref=e255]
            - generic [ref=e256]: Coming soon
    - generic [ref=e259]:
      - generic [ref=e260]:
        - heading "Learn & Get Inspired" [level=5] [ref=e261]
        - button " " [ref=e263] [cursor=pointer]:
          - generic [ref=e265]:
            - generic [ref=e266]: 
            - generic: 
      - generic [ref=e268]:
        - generic [ref=e269]:
          - heading [level=2] [ref=e270]:
            - text: Support at
            - link "devs.keenthemes.com" [ref=e271] [cursor=pointer]:
              - /url: https://devs.keenthemes.com
          - generic [ref=e272]: Join our developers community to find answer to your question and help others.
          - link "Get Support" [ref=e273] [cursor=pointer]:
            - /url: https://devs.keenthemes.com
        - generic [ref=e274]:
          - generic [ref=e277]:
            - generic [ref=e278]: 
            - generic: 
          - generic [ref=e279]:
            - generic [ref=e280]:
              - link "Documentation" [ref=e281] [cursor=pointer]:
                - /url: https://preview.keenthemes.com/metronic8/angular/docs/quick-start
              - generic [ref=e282]: From guides and video tutorials, to live demos and code examples to get started.
            - generic [ref=e284]:
              - generic [ref=e285]: 
              - generic: 
        - generic [ref=e286]:
          - generic [ref=e289]:
            - generic [ref=e290]: 
            - generic: 
          - generic [ref=e291]:
            - generic [ref=e292]:
              - link "Layout Builder" [ref=e293] [cursor=pointer]:
                - /url: /builder
              - generic [ref=e294]: Build your layout, preview it and export the HTML for server side integration.
            - generic [ref=e296]:
              - generic [ref=e297]: 
              - generic: 
        - generic [ref=e300]:
          - generic [ref=e301]:
            - link "What's New" [ref=e302] [cursor=pointer]:
              - /url: https://preview.keenthemes.com/metronic8/angular/docs/changelog
            - generic [ref=e303]: Latest features and improvements added with our users feedback in mind.
          - generic [ref=e305]:
            - generic [ref=e306]: 
            - generic: 
```

# Test source

```ts
  1   | const { expect } = require('@playwright/test');
  2   | 
  3   | class FormsPage {
  4   |   constructor(page) {
  5   |     this.page = page;
  6   |     this.frame = page.frameLocator('iframe');
  7   | 
  8   |     // Outer page locators
  9   |     this.searchInput = page.locator('div.input-group input');
  10  |     this.formCard = page.locator('div.fs-2.fw-bolder').first();
  11  | 
  12  |     // Iframe locators
  13  |     // NOTE: ids contain timestamps (text-1770717231658), so match by prefix instead
  14  |     this.addButton = this.frame.getByRole('button', { name: 'Add' });
  15  |     this.textField = this.frame.locator('input[id^="text-"]');
  16  |     this.numberField = this.frame.locator('input[id^="number-"]');
  17  |     this.multiSelectSearch = this.frame.locator('textarea.select2-search__field');
  18  |     this.multiSelectChoices = this.frame.locator('ul.select2-results__options>li');
  19  | 
  20  |     this.singleSelectContainer = this.frame.locator(
  21  |       '[id^="select2-single-select-"][id$="-container"]'
  22  |     );
  23  |     this.dropdownOptions = this.frame.locator('ul.select2-results__options>li');
  24  |     this.dateTimeField = this.frame.locator('input[type="datetime-local"]');
  25  |     this.submitButton = this.frame.locator('#kt_modal_add_customer_submit');
  26  |     this.successOkButton = this.frame.getByText('Ok, got it!');
  27  | 
  28  |     // Test data
  29  |     this.texts = ['Mechanical', 'Electrical', 'Testing', 'Dashboard', 'Automation'];
  30  |     this.numbers = ['0.345', '300', '20', '45.6798', '090'];
  31  |   }
  32  | 
  33  |   // ---------- helpers ----------
  34  |   _random(arr) {
  35  |     return arr[Math.floor(Math.random() * arr.length)];
  36  |   }
  37  | 
  38  |   _nowForDateTimeLocal() {
  39  |     const d = new Date();
  40  |     const p = (n) => String(n).padStart(2, '0');
  41  |     return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`;
  42  |   }
  43  | 
  44  |   // ---------- actions ----------
  45  |   async searchAndOpenForm(formName) {
  46  |     await this.searchInput.fill(formName);
  47  |     await expect(this.searchInput).toHaveValue(formName);
  48  |     await this.formCard.click();
  49  |   }
  50  | 
  51  |   async clickAdd() {
  52  |     await expect(this.addButton).toBeVisible();
  53  |     await this.addButton.click();
  54  |   }
  55  | 
  56  |   async fillTextField() {
  57  |     const value = this._random(this.texts);
  58  |     await this.textField.fill(value);
  59  |     await expect(this.textField).toHaveValue(value);
  60  |     return value;
  61  |   }
  62  | 
  63  |   async fillNumberField() {
  64  |     const value = this._random(this.numbers);
  65  |     await this.numberField.fill(value);
  66  |     await expect(this.numberField).toHaveValue(value);
  67  |     return value;
  68  |   }
  69  | 
  70  |   // Picks `count` random options one at a time (select2 removes selected items from the list)
  71  | async selectMultipleOptions(count = 2) {
  72  |   for (let i = 0; i < count; i++) {
  73  |     await this.multiSelectSearch.click();
  74  |     const total = await this.dropdownOptions.count();
  75  |     console.log(total);
  76  |     await this.dropdownOptions.nth(Math.floor(Math.random() * total)).click();
  77  |      await this.page.keyboard.press('Escape');
  78  | 
  79  | 
  80  |     // wait until the chip is actually added before picking the next one
  81  |   }
  82  | }
  83  |   async selectSingleOption() {
  84  |    await this.page.keyboard.press('Escape');
  85  |     await this.singleSelectContainer .click();
  86  |     const total = await this.dropdownOptions.count();
  87  |     await this.dropdownOptions.nth(Math.floor(Math.random() * total)).click();
  88  |     await expect(this.singleSelectContainer).not.toBeEmpty();
  89  |   }
  90  | 
  91  |   async fillCurrentDateTime() {
  92  |     const value = this._nowForDateTimeLocal();
> 93  |     await this.dateTimeField.fill(value);
      |                              ^ Error: locator.fill: Error: strict mode violation: locator('input[type="datetime-local"]') resolved to 4 elements:
  94  |     await expect(this.dateTimeField).toHaveValue(value);
  95  |   }
  96  | 
  97  |   async submit() {
  98  |     await this.submitButton.click();
  99  |   }
  100 | 
  101 |   async confirmSuccess() {
  102 |     await this.successOkButton.click();
  103 |   }
  104 | 
  105 |   // ---------- assertions ----------
  106 |   async assertFormOpened() {
  107 |     await expect(this.addButton).toBeVisible();
  108 |   }
  109 | 
  110 |   async assertAddFormDisplayed() {
  111 |     await expect(this.textField).toBeVisible();
  112 |     await expect(this.numberField).toBeVisible();
  113 |     await expect(this.submitButton).toBeEnabled();
  114 |   }
  115 | 
  116 |   async assertSubmissionSuccess() {
  117 |     await expect(this.successOkButton).toBeVisible();
  118 |   }
  119 | 
  120 |   async assertPopupClosed() {
  121 |     await expect(this.successOkButton).toBeHidden();
  122 |   }
  123 | }
  124 | 
  125 | module.exports = { FormsPage };
```