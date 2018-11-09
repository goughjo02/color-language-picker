export function selectTheme(primaryColor, secondaryColor) {
    return {
        type: 'SWITCH',
        primaryColor,
        secondaryColor
    };
}