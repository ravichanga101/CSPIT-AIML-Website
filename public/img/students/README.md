# Student Achievements Section

This section displays outstanding student achievements with photos, names, and accomplishments.

## Adding Student Photos

To add student photos:

1. Save student photos in the `img/students/` directory
2. Name the files as `student1.jpg`, `student2.jpg`, etc.
3. Recommended image specifications:
   - Format: JPG, PNG, or JPEG
   - Resolution: 400x400 pixels (square ratio preferred)
   - File size: Less than 500KB for optimal loading

## Updating Student Information

### In the main section (include/student_achievements.php):
- Edit the student names, courses, and descriptions
- Update the achievement badges (Winner, Gold Medal, Research, etc.)
- Modify the onerror fallback images if needed

### In the detailed page (view/student_achievements_all.php):
- Add more detailed descriptions
- Update statistics in the stats section
- Add or modify achievement categories
- Update achievement tags

## Features

- **Responsive Design**: Works on all device sizes
- **Hover Effects**: Interactive cards with smooth animations
- **Category Filtering**: Filter achievements by type (Competition, Research, Startup, etc.)
- **Modern UI**: Matches the website's color scheme and design patterns
- **Fallback Images**: Uses portfolio images if student photos are not available

## Color Scheme

The section uses the website's existing color scheme:
- Primary Blue: #0c2e8a
- Secondary Green: #29cca3
- Background: #f8f9fa
- Text: #666, #333

## Customization

You can easily customize:
- Achievement categories in the filter buttons
- Statistics numbers in the stats section
- Achievement badge styles and colors
- Card layouts and animations

## Browser Compatibility

The section works on all modern browsers and includes:
- CSS3 animations and transitions
- Flexbox layouts for responsive design
- Font Awesome icons
- Bootstrap grid system integration
