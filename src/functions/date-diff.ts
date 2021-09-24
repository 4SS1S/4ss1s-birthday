export const dateDiff = (date1: Date, date2: Date): string => {
	const diff = Math.abs(date1.getTime() - date2.getTime()) / 1000

	if (diff < 60) {
		const seconds = Math.floor(diff)

		if (seconds === 1) {
			return `${seconds} segundo ago`
		} else {
			return `${seconds} segundos ago`
		}
	}

	if (diff < 3600) {
		const minutes = Math.floor(diff / 60)

		if (minutes === 1) {
			return `${minutes} minuto atrás`
		} else {
			return `${minutes} minutos atrás`
		}
	}

	if (diff < 86400) {
		const hours = Math.floor(diff / 3600)

		if (hours === 1) {
			return `${hours} hora atrás`
		} else {
			return `${hours} horas atrás`
		}
	}

	if (diff < 604800) {
		const days = Math.floor(diff / 86400)

		if (days === 1) {
			return `${days} dia atrás`
		} else {
			return `${days} dias atrás`
		}
	}

	if (diff < 2592000) {
		const weeks = Math.floor(diff / 604800)

		if (weeks === 1) {
			return `${weeks} semana atrás`
		} else {
			return `${weeks} semanas atrás`
		}
	}

	if (diff < 31536000) {
		const months = Math.floor(diff / 2592000)

		if (months === 1) {
			return `${months} mês atrás`
		} else {
			return `${months} meses atrás`
		}
	}

	return `${Math.floor(diff / 31536000)} anos atrás`
}
