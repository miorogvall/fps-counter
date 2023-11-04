export const setFPSColors = (value) => {
    if(value <= 24) {
        return 'red'
    }
    else if(value <= 99 && value >= 25) {
        return 'yellow'
    } else if(value >= 100 && value <= 139 ) {
        return 'orange'
    } else {
        return 'green'
    }
} 