# Grow Zone Tracker

### User Story: Finding Plants to Grow Based on Time of Year and Hardiness Zones in Arizona

#### Title:

As a gardening enthusiast in Arizona, I want to find out what plants I can grow based on the time of year and the hardiness zones, so that I can plan my garden efficiently and increase the chances of successful plant growth.

#### Narrative:

Gardening in Arizona requires specific knowledge about which plants thrive in different hardiness zones and at various times of the year. By providing an easy-to-use tool that offers personalized planting recommendations, gardeners can make informed decisions that lead to healthier plants and more bountiful gardens.

#### Acceptance Criteria:

1. **Home Page**

   - **Given**: A user lands on the home page.
   - **Then**: They should see an introduction to the website and a navigation menu to explore different sections like "Find Plants", "About", and "Contact".

2. **Search Page**

   - **Given**: A user navigates to the "Find Plants" page.
   - **When**: The user inputs their hardiness zone and the current time of year.
   - **Then**: They should be able to submit the form to search for suitable plants.

3. **Displaying Results**

   - **Given**: The user submits the search form.
   - **When**: The form is submitted with valid data.
   - **Then**: The user should see a list of plants that can be grown in the specified hardiness zone and time of year.

4. **Plant Details Page**

   - **Given**: The user sees a list of plants.
   - **When**: The user clicks on a specific plant name.
   - **Then**: They should be redirected to a detailed page for that plant, which includes its name, suitable zones, optimal growing seasons, and additional care instructions.

5. **Error Handling**

   - **Given**: The user submits the search form with incomplete or invalid data.
   - **When**: The form is submitted.
   - **Then**: The user should see an alert message indicating that all fields must be completed correctly.

6. **Light/Dark Mode Toggle**

   - **Given**: The user is on any page of the website.
   - **When**: The user clicks the toggle button for light/dark mode.
   - **Then**: The website’s theme should switch between light and dark mode, and the preference should be saved for future visits.

7. **Back Navigation**

   - **Given**: The user is on the plant details page.
   - **When**: The user clicks the "Back" button.
   - **Then**: They should be redirected back to the search results page.

8. **Responsive Design**

   - **Given**: The user accesses the website from different devices (desktop, tablet, mobile).
   - **When**: The user interacts with the website.
   - **Then**: The website should display correctly and be easy to navigate on all devices.

9. **Persistent Data**
   - **Given**: The user adds a plant to their favorites.
   - **When**: The user returns to the website.
   - **Then**: The plant should still be listed in their favorites due to data persistence via local storage.

#### Usage

![Image of homepage]()
![Images of search results after user submits an input in the search bar]()
![Image of items saved to a favorite section in an offcanvas]()

#### Credits

**Contributors**

@Bbbjrn
@Lcoates5
@Romantech91
@MagneticSoul7

**External Sources**

The attributed API used to source information about hardiness zones and seasonal growing for plants is [API plant data](https://perenual.com/docs/api).

#### Features

- Search Functionality: Enable users to search for specific content within the application.
  Description: Users can search for keywords or phrases to find relevant information quickly.

- Dark Mode Toggle: Provide a dark mode option for users to change the color scheme.
  Description: Users can switch between light and dark modes for better readability and customization.

- Offcanvas Menu: An offcanvas menu is a navigation menu that slides in from the side, top, or bottom of the screen, typically hidden until triggered by a user action. It provides a way to display navigation links or additional content without taking up space on the main screen, making it a popular choice for responsive web design.

#### License

MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
