const ImageUpload = ({ setImage, reference }) => {
    const handleUpload = (e) => {
        let file = e.target.files[0];
        if (file && file.type.substr(0, 5) === 'image') {
            let reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <input
            type="file"
            name={reference}
            id={reference}
            onChange={handleUpload}
            accept="image/*"
            style={{ display: 'none' }}
        />
    );
};
export default ImageUpload;
