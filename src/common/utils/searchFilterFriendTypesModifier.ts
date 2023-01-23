export const friendFilterValueTypeToString = (value: any) => {
    if (value === null) {
        return 'null';
    } else if (value === true) {
        return 'true';
    } else {
        return 'false';
    }
}

export const friendFilterValueTypeFromString = (value: any) => {
    if (value === 'null') {
        return null;
    } else if (value === 'true') {
        return true;
    } else {
        return false;
    }
}