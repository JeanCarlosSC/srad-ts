// toCOP format
export function toCOP(value: number) {
	return value.toLocaleString('es-CO', {currency: 'COP', style: 'currency'})
}