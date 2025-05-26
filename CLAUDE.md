# Hexafort Kite Development Guide

## Implementation Notes

- Both pages follow the design principles specified in this guide
- All text content is stored in dedicated constants files
- Component styles are in separate style files using theme values
- Responsive design implemented with MUI breakpoints
- Focus on consistent typography, spacing, and UI elements

## Commands

- `npm run dev` - Run development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Code Style Guidelines

- **Typescript**: Use strict typing with explicit interfaces/types
- **Components**: Use 'use client' directive for client components
- **Styles**: Create separate style files (e.g., `componentNameStyle.ts`) using Material UI sx props
- **Imports**: Group imports by: React/Next, MUI, other libraries, local components, styles
- **Naming**: Use PascalCase for components and camelCase for variables/functions
- **Theme**: Use theme properties from `src/theme.ts` for consistent styling
- **Responsive Design**: Use MUI breakpoints in style objects, not in-line
- **File Structure**: Keep components and their styles in separate files in the same directory

## Tech Stack

- Next.js 15 with Turbopack
- React 19
- TypeScript
- Material UI v7 with Emotion
- Tailwind CSS for utilities

# Creating Compliance and Product Pages

## Page Structure

The typical compliance page should include these components in the following order:

1. **Hero Section**: Centered content with a clear headline, concise description, and prominent CTA.
2. **Benefits Section**: Card-based layout showcasing 3-4 key advantages with icons.
3. **Metrics Section**: Stats and figures highlighting impact (with proper heading and subtitle).
4. **Features/Screenshots Section**: Showcase product screenshots or features, typically alternating layout.
5. **Process/Steps Section**: Numbered or visual representation of implementation steps.
6. **Call-to-Action Banner**: Bold, gradient background with centered text and action button.
7. **FAQ Section**: Collapsible accordions with common questions and answers.

## Style Patterns for Compliance Pages

### Main Page Background

Always use a dark background for the main page container:

```tsx
<main style={{ backgroundColor: '#000000' }}>
```

### Section Background Alternation

Alternate between these background colors for visual rhythm:

- `theme.palette.background.default` (for dark sections)
- `theme.palette.background.darkPaper` (for alternate sections)

### Specific Section Styles

#### Hero Section

- Centered content with clear, concise copy
- Simple CTA button (avoid complex forms)
- Use `theme.palette.text.primary` for main heading
- Use `theme.palette.secondary.dark` for subtitle

#### Cards (Benefits, Steps, Features)

- Use `theme.palette.background.darkTransparent` for card backgrounds
- Should have subtle hover effects using:
  ```tsx
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  '&:hover': {
      transform: 'scale(1.05)',
      background: theme.palette.background.paper,
  }
  ```
  ##- Do not use `boxShadow: theme.customShadows.card` for consistent shadows

#### Call-to-Action Sections

- Use gradient background with theme colors:
  ```tsx
  background: 'linear-gradient(135deg, ' +
    theme.palette.secondary.main +
    ' 0%, ' +
    theme.palette.secondary.dark +
    ' 100%)';
  ```
- Include an icon (like AccessTimeIcon) for visual interest
- Button should contrast with gradient background

## Reference Components

For consistency, model your components on these existing implementations:

- **Hero Section**: Follow `Iso27001HeroSection` simple layout
- **Features/Cards**: Match `Iso27001ControlsSection` card design and hover effects
- **Call to Action**: Use the `OfferBanner` from risk-management page with gradient background
- **Screenshots Carousel**: Follow the styling of `Iso27001ComplianceWorkflow`
- **FAQ Section**: Use `Iso27001FaqSection` accordion styling

## Color & Typography Guidelines

### ABSOLUTELY CRITICAL

- **NEVER use hex codes directly in styles** - always reference theme colors:
  - Use `theme.palette.text.primary` instead of '#ffffff'
  - Use `theme.palette.text.secondary` instead of '#6B7280'
  - Use `theme.palette.background.default` instead of '#000000'

### Typography

Maintain consistent typographic hierarchy:

- Headings: `fontSize: { xs: '1.6rem', sm: '2rem' }` with `fontWeight: '600'`
- Subheadings: `fontSize: { xs: '1rem', md: '1.1rem' }`
- Body text: `fontSize: '1rem'` with `lineHeight: 1.6`
- Card titles: `fontSize: '1.1rem'` with `fontWeight: 'bold'`

### Key Theme Properties

#### Colors

- Primary text: `theme.palette.text.primary`
- Secondary text: `theme.palette.text.secondary`
- Main background: `theme.palette.background.default`
- Card background: `theme.palette.background.paper` or `theme.palette.background.darkTransparent`
- Accent colors: `theme.palette.secondary.main`/`dark` (teal/cyan tones)

#### Shadows & Gradients

- Card shadows: `theme.customShadows.card`
- Button shadows: `theme.customShadows.button`
- Gradient backgrounds: Use `theme.palette` colors in gradients rather than hard-coded values

### Icon Containers

For icon containers within cards:

```tsx
iconContainer: {
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.secondary.light,

    marginBottom: "1rem",
},
```

## Best Practices for Page Creation

1. **Start with Reference**:

   - Always begin by studying existing pages in the `/compliance/get-xyz` directories
   - The `/get-iso-27001` page is a good reference for structure and styling

2. **Spacing and Padding Consistency**:

   - Use consistent padding between sections:
     ```tsx
     paddingTop: { sm: '2rem', xs: '1rem' },
     paddingBottom: { sm: '2rem', xs: '1rem' },
     ```
   - For the hero section, use the paddingTop: {sm: '4rem', xs: '2rem'}
   - Keep vertical rhythm consistent throughout the page

3. **Content Organization**:

   - Keep ALL text content in a dedicated constants file (e.g., `iso42001Data.ts`)
   - Structure data with clear section naming: hero, benefits, features, etc.
   - Use proper types for the data structure

4. **Form Implementation**:

   - For pages with forms, use the `EnhancedHeroSectionForm` pattern with Formik
   - If forms are complex, consider a dedicated form section rather than in the hero

5. **Gradients & Visual Hierarchy**:
   - Use alternating background colors to create visual rhythm
   - For call-to-action sections, use gradient backgrounds with theme colors
   - Ensure text has adequate contrast against all backgrounds

# Design Steps to Create a Great Page

1. **Establish a Clear Structure & Reference Points**

   - Follow the overall structure, design patterns, and hierarchy of other pages in the referenced directory (e.g., `/get-pci-dss`).
   - Use consistent sectioning (header, body, footer, etc.) and avoid clutter.

2. **Leverage Content Correctly**

   - Do not copy and paste existing text; rely on your memory or the content provided by user instructions.
   - If the user explicitly provides content, prioritize their version over memory.
   - Anticipate future internationalization: avoid hardcoding text in your components; keep all text in the constants data file within the page directory.

3. **Explore an Alternate Color Theme & Layout**

   - Experiment with new color choices or gradient treatments, as long as they remain cohesive and aesthetically pleasing.
   - Ensure colors provide adequate contrast for readability and maintain brand-appropriate vibes.

4. **Incorporate Interactive & Visual Elements**

   - Every component should include more than just text; add icons, images, or other interactive elements for richer engagement.
   - If you cannot provide images directly, leave placeholders (or references) where they will be integrated.

5. **Focus on Readability & Alignment**

   - Center-align text for both mobile and desktop layouts, especially headings and subheadings.
   - Use consistent font families and font sizes across headings, body text, lists, and buttons.

6. **Ensure Responsiveness & Spacing Consistency**

   - Make the page fully responsive on mobile and desktop.
   - Provide uniform padding between sections and from the page top:
     ```css
     paddingTop: { sm: '1rem', xs: '0.5rem' },
     paddingBottom: { sm: '1rem', xs: '0.5rem' },
     marginTop: '5rem',
     marginX: { xs: '1rem', sm: '0rem' },
     ```
   - Keep heading text centered and maintain consistent spacing so sections "breathe" visually.

7. **Introduce a New Component**

   - To avoid repetition, create at least one new component design instead of reusing existing layouts exactly.
   - Continue to ensure it "looks nice" and fits the overall theme, typography, and color scheme.

8. **Use a Dedicated Data File for Content**
   - Place any text or string data in the `constants` folder within the page's directory.
   - This allows easy changes, potential for multi-language support later, and avoids scattering text through multiple components.
9. The tab is 4 spaces, not 2 spaces
10. In future we may implement internationalization, so make sure the text is not hardcoded in the component, always part of the constants folder for that directory

---

# CSS Best Practices & Rules

1. **Use rem Instead of px**

   - Define font sizes, widths, and spacing in `rem` to ensure accessibility and scalability.

2. **Avoid Inline Styling** (SUPER IMPORTANT)

   - Keep your styling organized in separate files or style objects.
   - If you find inline styles, refactor them into a dedicated styles folder or module.

3. **Maintain 4-Space Indentation**

   - Use four spaces (not two) for code indentation to keep formatting consistent and readable.

4. **Stay Consistent with Typography**

   - Use the same font family for headings, paragraphs, lists, buttons—every text element.
   - Keep font sizes uniform and aligned to a clear typographic scale.

5. **Adhere to Shared Spacing & Padding**

   - Include the default section padding snippet to maintain consistent spacing across sections (see above).
   - Keep top-of-page padding, section-to-section padding, and margins uniform.

6. **Embrace Responsive Layout Techniques**

   - Rely on Flexbox or CSS Grid to ensure the page adjusts fluidly for different screen sizes.
   - Center text on all devices, as the design requires.

7. **Use Gradients & Alternate Colors with Care**

   - Feel free to experiment with gradients or new color schemes as long as they align with the design concept.
   - Try implementing an alternate color theme (black, gradient, black, gradient etc.)
   - Keep all colors in line with the brand style if one exists; otherwise, ensure good contrast and a cohesive palette.

8. **Reference Existing Files Appropriately**

   - Do not use `@` in imports (e.g., `@/...`); import local files with relative paths.
   - Follow the same folder structures and naming conventions as other pages in the directory.

9. **Centralize All Text in Constants**

   - Any text displayed on the page should come from the constants folder. (create one for the folder you create)
   - This ensures straightforward updates, potential for future translations, and a clean separation of concerns.

10. **Keep Everything Clean & Performant**

    - Strive for minimal, well-structured CSS rules.
    - Avoid code duplication, and compress/minify as needed to enhance performance.

11. **Text for the heading always has to be center, some sections may not have a subheading or heading**

12. **Text for the subheading always has to be center aligned, some sections may or may not have a subheading**

13. **Never use hexcodes in style files**

    - Always use theme colors from theme.palette (e.g., theme.palette.text.primary instead of '#ffffff')
    - Use theme.palette.background.default, theme.palette.text.primary, theme.palette.text.secondary, etc.
    - For other colors, use theme.palette.primary.main, theme.palette.secondary.main, or other theme properties

14. **Always include MUI icons**

    - Use Material UI icons in components where applicable
    - RECOMMENDED APPROACH: Import specific icon components directly from @mui/icons-material
      ```tsx
      // Data file
      import SecurityIcon from '@mui/icons-material/Security';
      import { SvgIconComponent } from '@mui/icons-material';
      
      interface Feature {
        title: string;
        muiIcon: SvgIconComponent;  // Note the type is SvgIconComponent, not string
      }
      
      // Using in data
      const features = [
        {
          title: "Security",
          muiIcon: SecurityIcon,  // Use the imported component directly
          description: "..."
        }
      ];
      
      // Component file
      // In your render method
      <feature.muiIcon sx={styles.icon} />
      ```
    - AVOID: Using string references with the Icon component - this approach is less reliable
    - Add meaningful icons to enhance the UI (e.g., in cards, buttons, list items)

15. **Typography & Font Size Consistency**

    - **EXACT FONT SIZES TO BE USED:**
      - Main Headings: `fontSize: { xs: '1.6rem', sm: '2rem' }` with `fontWeight: '600'`
      - Subheadings: `fontSize: { xs: '1rem', md: '1.1rem' }`
      - Body text: `fontSize: '1rem'` with `lineHeight: 1.6`
      - Small text/captions: `fontSize: '0.9rem'`
      - Button text: `fontSize: '0.9rem'` with `fontWeight: 'bold'` or `fontWeight: 800`
      - Card titles: `fontSize: '1.1rem'` with `fontWeight: 'bold'`
    - Always use responsive font sizes for headings and important text elements
    - Keep text line heights consistent: body text should use `lineHeight: 1.6`
    - Use theme text colors consistently:
      - Headings: `color: theme.palette.text.primary`
      - Body text: `color: theme.palette.text.secondary`
      - Highlighted text: `color: theme.palette.secondary.main`

16. **Section Spacing & Padding**

    - Use consistent padding between sections:
      ```css
      paddingTop: { sm: '4rem', xs: '2rem' },
      paddingBottom: { sm: '2rem', xs: '1rem' },
      ```
    - Keep spacing between elements consistent by using theme spacing:
      - Vertical spacing between elements: 1-2rem
      - Gaps in flex layouts: `gap: '1.5rem'` or `gap: { xs: '1.5rem', sm: '2rem' }`
      - Container horizontal padding: `padding: { xs: '2rem 1rem', sm: '3rem 2rem' }`

17. **Element Sizing Consistency**
    - Card heights should be explicitly set for uniformity: `height: { sm: "16rem", xs: "auto", md: "19rem" }`
    - Icon containers should be consistent: `width: "3rem", height: "3rem"`
    - Buttons should have consistent padding: `padding: { xs: '0.25rem 0.5rem', sm: '0.375rem 0.75rem', md: '0.7rem 1rem' }`

---

For instance, the hero section should have a concise value proposition and a prominent call-to-action. The calls-to-action (CTA) text and placement are optimized based on competitor analysis and known UX guidelines (e.g. one primary CTA above the fold). Readability is also crucial: use legible font sizes, sufficient contrast, and break text into digestible chunks. As one guide notes, simple design choices like the right background color, easy-to-read fonts, and attention to link/button color can improve conversion​. Mobile-friendliness is mandatory – the JSON can include responsive design hints if needed (or the React components will handle it). This step might also incorporate A/B testing considerations, e.g. preparing two variations of a headline or CTA text for experimentation.

Below is a **concise, step-by-step guide** instructing an engineer on how to structure, style, and implement a new page—whether it's a product page, service offering, or informational resource. These guidelines ensure consistency, responsiveness, and maintainability in your code.

---

## 1. Planning & Setup

1. **Review Existing Patterns**

   - Examine the codebase (e.g., similar pages or prior work) to understand component organization, style usage, and layout patterns.
   - Identify any shared components or repeated style objects you can reuse.

2. **Project Structure**
   - Create a dedicated entry file (e.g., `page.tsx`) for the new page.
   - Add a constants file (e.g., `pageData.ts`) containing text content, metadata, and other relevant data.
   - Set up shared or page-specific styles in a styles file (e.g., `pageStyles.ts`).

---

## 2. Component Creation & Order

1. **Hero Section (Main Landing)**

   - Displays the primary headline, brief introduction, and an optional CTA.

2. **Informational Section**

   - Provides background, definitions, or highlights of your product/service.

3. **Features Section**

   - Showcases key capabilities, benefits, or selling points.

4. **Process/Steps Section**

   - Outlines a clear, step-by-step flow or roadmap (e.g., "5 Steps to Get Started").

5. **Expertise/Support Section**

   - Demonstrates credibility with testimonials, certifications, or third-party validations.

6. **Call to Action (Demo/Sign-Up)**

   - Encourages user engagement with a direct request (e.g., "Book a Demo," "Sign Up Now," etc.).

7. **Offer (Promotional/Time-Sensitive)**

   - Highlights any special deals, time-limited offers, or unique advantages.

8. **FAQ Section**
   - Presents frequently asked questions and concise answers, often in a collapsible format.

---

## 3. Component Structure & Implementation

1. **Create & Isolate**

   - Each section (Hero, Features, FAQ, etc.) should be its own component.
   - Keep logic and styles modular; import constants from a data file to avoid hardcoding text.

2. **Import Dependencies**

   - Bring in libraries (e.g., React, UI frameworks) and any shared components.
   - Import style objects or theme settings to ensure consistent design.

3. **Build JSX Structure**
   - Use semantic tags and well-structured, nested elements.
   - Example:
     ```tsx
     <Box sx={style.container}>
       <Box sx={style.content}>
         <Typography variant="h2">{data.title}</Typography>
       </Box>
     </Box>
     ```
4. **Ensure Responsiveness**
   - Use responsive props for spacing, font sizes, and layout.
   - Test each component at mobile, tablet, and desktop breakpoints.

---

## 4. Styling Guidelines

1. **Section Wrappers**

   - Define a consistent style pattern for padding and margins.
   - Keep style objects tidy—group related properties.

2. **Typography & Spacing**

   - Establish a clear hierarchy of headings and paragraph text.
   - Use consistent spacing to make sections visually distinct.

3. **Gradients & Backgrounds**

   - Ensure sufficient contrast for text to maintain legibility.
   - Avoid overly busy backgrounds that distract from content.

4. **Hover & Interactive States**
   - Offer visual cues (e.g., color changes, underlines) for buttons and links.

---

## 5. Best Practices & Considerations

### 5.1 Code Organization

- **Constants for Text**: Keep text, labels, and metadata in a constants or data file.
- **Reusable Components**: Factor out repeating blocks (e.g., shared CTA) to streamline updates.
- **Controlled Components**: Use React state hooks or built-in UI components for interactivity (e.g., accordions, tabs).

### 5.2 Responsive Design

- **Mobile-First**: Start styling at the smallest breakpoint and scale up.
- **Unified Theme**: Centralize breakpoints in a theme to maintain consistency across components.

### 5.3 Performance & Optimization

- **Lazy Loading**: Split large or secondary components to reduce initial load.
- **Efficient Images**: Pre-optimize images and consider lazy loading for large media.
- **Minimize Repetition**: Share style objects and custom hooks wherever possible.

### 5.4 Semantic HTML & Accessibility

- **Proper Headings**: Follow a logical `<h1>`, `<h2>`, `<h3>` sequence for screen readers and SEO.
- **Alt Text**: Always include descriptive alt text for images.
- **Focus States**: Ensure buttons and links are navigable via keyboard.

---

## 6. Example Improvements

### 6.1 Organized Styles

```ts
// Good
const componentStyle = {
  container: {
    paddingTop: { sm: '1rem', xs: '0.5rem' },
    // etc.
  },
  content: {
    maxWidth: '75rem',
    margin: '0 auto',
  },
};

// Not as good
const messyStyle = {
  container: {
    padding: '1rem',
    // Mixed concerns
  },
};
```

### 6.2 Adaptive Font Sizing

```ts
// Good
fontSize: { xs: '1.6rem', sm: '2rem' }

// Less flexible
fontSize: '2.5rem'
```

### 6.3 Meaningful Component Composition

```tsx
// Recommended
<Box sx={style.container}>
    <Box sx={style.content}>
        <Typography variant="h2" sx={style.title}>
            {data.title}
        </Typography>
    </Box>
</Box>

// Instead of
<div style={{padding: '1rem'}}>
    <h2>{title}</h2>
</div>
```

### 6.4 Proper Grid Usage

```tsx
// INCORRECT CORRECT WAY - Don't Grid item with proper props
<Grid container spacing={3}>
    <Grid item xs={12} sm={6} md={3}>
        <Card>Content</Card>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
        <Card>Content</Card>
    </Grid>
</Grid>

// CORRECT WAY - Use size={{ }}
<Grid container spacing={3}>
    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Card>Content</Card>
    </Grid>
</Grid>
```

---

## 7. Summary of Key Takeaways

1. **Follow a Structured Approach**: Plan your page sections, create modular components, and keep a consistent style hierarchy.
2. **Embrace Responsive Design**: Implement dynamic layouts for mobile, tablet, and desktop users.
3. **Optimize for Performance**: Use code splitting, shared styles, and lazy loading where applicable.
4. **Ensure Accessibility**: Employ semantic tags, alt text, and keyboard-friendly navigation.
5. **Leverage Reusability**: Store repeated text and logic in a single source of truth to minimize future maintenance.

### 8. Also visit all the style files to understand how styling is done in this project.

### IMPORTANT: ONLY USE THE COLORS IN THE THEME FILE.

### IMPORTANT: NEVER USE HEXCODES in the STYLE FILES - ALWAYS USE THEME PROPERTI
