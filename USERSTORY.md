
# Grow Zone Tracker

Gardening in Arizona requires specific knowledge about which plants thrive in different hardiness zones and at various times of the year. By providing an easy-to-use tool that offers personalized planting recommendations, gardeners can make informed decisions that lead to healthier plants and more bountiful gardens.


## User Story

**AS A USER** in the U.S.A,
<br>
<br>

**I WANT** a website where I can search for different plants either by their name and/or by hardiness zones and even save them to my favorites, 
<br>
<br> 

**SO THAT** I can get personalized planting recommendations on what plants I'm able to grow best in my geaographical location based on my hardiness zone and also see photos and information on the plants.


## Acceptance Criteria

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

