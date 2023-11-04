export const setFPSEmoji = (value) => {
    if(value <= 24) {
        return '\u{1F625}'
    }
    else if(value <= 99 && value >= 25) {
        return '\u{1F61}'
    } else if(value >= 100 && value <= 139 ) {
        return '\u{1F914}'
    } else {
        return '\u{1F604}'
    }
} 