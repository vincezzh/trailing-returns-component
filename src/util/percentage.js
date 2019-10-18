export default function(value, decimalPosition = 2) {
    if(value == null) return "";
    return value.toFixed(decimalPosition) + "%";
}