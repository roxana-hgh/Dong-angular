// mypreset.ts
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}',
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
        },
        surface: {
            dark: {
                0: '{blue.950}',     // Deep background (e.g., body)
                50: '{blue.900}',    // Dark cards/containers
                100: '{blue.800}',
                200: '{blue.700}',
                300: '{blue.600}',
                400: '{blue.500}',
                500: '{blue.400}',
                600: '{blue.300}',
                700: '{blue.200}',
                800: '{blue.100}',
                900: '{blue.50}'     // Lightest blue used in dark cards
            }
        }
    },
    variables: {
        // Custom overrides for Noir mode using blue surfaces
        'surface-ground': '{surface.dark.0}',      // page background
        'surface-section': '{surface.dark.50}',    // layout sections
        'surface-card': '{surface.dark.100}',      // card background
        'surface-overlay': '{surface.dark.200}',   // dialogs, overlays        'surface-border': 'rgba(0,0,0,0.1)',     // default border color light mode
     
        
        
        'focus-ring': '{primary.500}',             // for accessibility outlines
       
        
    }
});

export default MyPreset;
