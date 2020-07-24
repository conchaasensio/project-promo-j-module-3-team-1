import React from "react";

class ImageComponent extends React.Component {
  constructor(props) {
    super(props);

    this.fr = new FileReader();
    this.fileField = React.createRef();
    this.getImage = this.getImage.bind(this);
    this.writeImage = this.writeImage.bind(this);
    this.fakeFileClick = this.fakeFileClick.bind(this);
  }

  getImage(event) {
    event.preventDefault();
    const myFile = event.currentTarget.files[0];
    this.fr.addEventListener("load", this.writeImage);
    this.fr.readAsDataURL(myFile);
  }

  writeImage() {
    this.setState({
      photo: this.fr.result,
    });
    //ACTUALIZAR AVATAR
    this.fileField.current.value = "";
  }

  fakeFileClick() {
    this.fileField.current.click();
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
          onClick={this.fakeFileClick}
        >
          Añadir imagen
        </button>
        <input
          type="file"
          name=""
          id="img-selector"
          className={`${this.fileField} action__hiddenField`}
          onChange={this.writeImage}
        />
        <div className="profile__preview js__profile-preview"></div>
      </>
    );
  }
}

export default ImageComponent;
