export const downloadFile = (blob: Blob, fileName: string) => {
	const objUrl = window.URL.createObjectURL(blob);
	const anchor = document.createElement('a');
	anchor.href = objUrl;
	anchor.download = fileName;
	anchor.click();

	window.URL.revokeObjectURL(objUrl);
};
