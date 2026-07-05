# UNIVERSAL CALCULATOR PAGE MASTER PROMPT

## 1. Purpose of this template
This template is designed to maintain functional and visual consistency across a suite of calculator pages for any web project, ensuring that every tool feels like part of a unified ecosystem while allowing for diverse technical logic.

## 2. Design and product principles
Every calculator must adhere to these core principles: a practical and professional tone, transparent logic through visible assumptions, a mobile-first responsive layout, and ensuring the tool is usable immediately above the fold.

## 3. Shared page structure
Standard pages should include: a Hero section with H1 and brief description, the functional Calculator Module, a Results hierarchy, a Logic/Formulas section, an FAQ, and a Disclaimer footer.

## 4. Shared UI/UX rules
Input fields should utilize appropriate controls (sliders, dropdowns, toggles) on the left/top, with real-time results displayed prominently on the right/bottom using contrasting visual anchors for primary outputs.

## 5. Shared accessibility rules
All calculators must meet WCAG standards, including proper ARIA labels for dynamic results, keyboard navigability for all controls, and high color contrast for readability.

## 6. Shared mobile rules
The interface must collapse into a single-column stack on small screens, ensuring touch targets are appropriately sized and inputs do not trigger obstructive zoom behaviors.

## 7. Shared repository safety rules
Coding agents must not introduce third-party dependencies outside of the approved stack, must not alter global stylesheets, and should strictly follow the PIV (Plan-Implement-Validate) workflow.

## 8. Parameter list
Before using the template, define: {{PROJECT_NAME}}, {{CALCULATOR_NAME}}, {{INDUSTRY_CATEGORY}}, {{PRIMARY_USER_GOAL}}, {{INPUT_FIELDS}}, {{OUTPUT_FIELDS}}, {{FORMULA_LOGIC}}, {{FAQ_TOPICS}}, and {{RELATED_TOOLS}}.

## 9. Reusable master prompt template
"I am implementing a new {{CALCULATOR_NAME}} for the {{PROJECT_NAME}} platform within the {{INDUSTRY_CATEGORY}} category. Please build a complete page where the primary goal is {{PRIMARY_USER_GOAL}}. Use the following inputs: {{INPUT_FIELDS}} and provide these outputs: {{OUTPUT_FIELDS}} based on {{FORMULA_LOGIC}}. Ensure the UI follows the two-column layout and established mobile behaviors. Include sections for {{FAQ_TOPICS}} and link to {{RELATED_TOOLS}}."

## 10. Usage instructions
To use this template, replace all double-bracketed variables with specific project data and provide it to the coding agent alongside the shared design system documentation.

## 11. Consistency checklist
- Is the calculator visible above the fold?
- Are results updating in real-time?
- Does the mobile view stack correctly?
- Are the technical assumptions clearly stated?
- Is the brand tone preserved?
