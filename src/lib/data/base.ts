const firstName = 'Irman';
const lastName = '';
const suffix = 'Irman Portfolio';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
