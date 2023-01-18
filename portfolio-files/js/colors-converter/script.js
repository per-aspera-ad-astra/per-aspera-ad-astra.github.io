'use strict';

const hexForm = document.getElementById('hex-to-rgb-form');
const hexInput = document.getElementById('hex-to-rgb-input');
const hexOutput = document.getElementById('hex-to-rgb-output');
const hexErrorField = document.getElementById('hex-to-rgb-error');
const hexCopyBtn = document.getElementById('hex-to-rgb-copy');
const hexPreviewField = document.getElementById('hex-to-rgb-preview');

const rgbForm = document.getElementById('rgb-to-hex-form');
const rgbInputR = document.getElementById('rgb-to-hex-input-r');
const rgbInputG = document.getElementById('rgb-to-hex-input-g');
const rgbInputB = document.getElementById('rgb-to-hex-input-b');
const rgbOutput = document.getElementById('rgb-to-hex-output');
const rgbErrorField = document.getElementById('rgb-to-hex-error');
const rgbCopyBtn = document.getElementById('rgb-to-hex-copy');
const rgbPreviewField = document.getElementById('rgb-to-hex-preview');

hexForm.addEventListener('submit', (e) => {
	e.preventDefault();
	clearOutput(hexOutput);
	hideError(hexErrorField);
	setPreviewBg(hexPreviewField, '');
	convertHexToRgb(hexInput.value);
});

hexCopyBtn.addEventListener('click', () => {
	copyToClipboard(hexOutput.value);

	if (hexOutput.value) {
		showCopied(hexCopyBtn);
	}
});

rgbForm.addEventListener('submit', (e) => {
	e.preventDefault();
	clearOutput(rgbOutput);
	hideError(rgbErrorField);
	setPreviewBg(rgbPreviewField, '');
	convertRgbToHex(rgbInputR.value, rgbInputG.value, rgbInputB.value,)
});

rgbCopyBtn.addEventListener('click', () => {
	copyToClipboard(rgbOutput.value);

	if (rgbOutput.value) {
		showCopied(rgbCopyBtn);
	}
});

function convertHexToRgb(value) {
	const regex = /^[a-fA-F0-9]{6}$/;
	let modifiedValue = value.indexOf('#') === 0 ? value.slice(1) : value;

	if (modifiedValue.length === 3) {
		modifiedValue = double(modifiedValue);
	}

	if (!modifiedValue.length === 6 || !regex.test(modifiedValue)) {
		showError(hexErrorField);

		return;
	}

	const result = [modifiedValue.slice(0,2), modifiedValue.slice(2,4), modifiedValue.slice(4)].map(item => +`0x${item}`);

	hexOutput.value = `rgb(${result.join(', ')})`;
	setPreviewBg(hexPreviewField, `rgb(${result})`)
}

function convertRgbToHex(red, green, blue) {
	const regex = /^[0-9]{1,3}$/;
	const value = [red, green, blue];
	let error = false;

	value.forEach(item => {
		if (item === '' || +item < 0 || +item > 255 || !regex.test(+item)) {
			showError(rgbErrorField);
			error = true;
	
			return;
		}
	});

	if (!error) {
		const result = value.map(item => {
			let converted = parseInt(item).toString(16);
	
			if (converted.length === 1) {
				converted = double(converted);
			}
			
			return converted;
		});
	
		rgbOutput.value = `#${result.join('')}`;
		setPreviewBg(rgbPreviewField, `#${result.join('')}`);
	}
}

function clearOutput(field) {
	field.value = '';
}

function setPreviewBg(item, value) {
	item.style.background = value;
}

function showError(field) {
	field.textContent = 'Please input correct value';
}

function hideError(field) {
	field.textContent = '';
}

function double(str) {
	return str.split('').map(item => item + item).join('');
}

function copyToClipboard(value) {
	navigator.clipboard.writeText(value);
}

function showCopied(btn) {
	const initialText = btn.textContent;
	const temporaryText = 'Copied!';

	btn.textContent = temporaryText;

	setTimeout(() => btn.textContent = initialText, 2000);
}
