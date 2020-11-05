const spacer = 16
const factor = [0, 0.125, 0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 4, 6]

const spacing = factor.map(factor => `${spacer * factor}px`)

export default spacing
