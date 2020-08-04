import React from 'react';

class ImageComponent extends React.Component {
  constructor(props) {
    super(props);

    this.fr = new FileReader();
    this.myFileField = React.createRef();

    this.handleFilePicker = this.handleFilePicker.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  handleFilePicker() {
    this.myFileField.current.click();
  }

  uploadImage(e) {
    const myFile = e.currentTarget.files[0];
    this.fr.addEventListener('load', this.getImage);
    this.fr.readAsDataURL(myFile);
  }

  getImage() {
    const image = { inputValue: this.fr.result, inputKey: 'photo' };
    this.props.handleInput(image);
  }

  getPreview(isDefault, image) {
    return !isDefault ? { backgroundImage: `url(${image})` } : {};
  }

  render() {
    return (
      <>
        <label className="label" htmlFor="image">
          Imagen de perfil
          <i className="fas fa-asterisk" aria-hidden="true"></i>
        </label>
        <button
          className="button js__profile-trigger"
          type="button"
          onClick={this.handleFilePicker}
        >
          Añadir imagen
        </button>
        <input
          type="file"
          name=""
          id="img-selector"
          className={`${this.fileField} action__hiddenField`}
          ref={this.myFileField}
          onChange={this.uploadImage}
        />
        <div className="profile__preview js__profile-preview"></div>
      </>
    );
  }
}

export default ImageComponent;
