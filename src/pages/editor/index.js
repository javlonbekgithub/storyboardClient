import React from 'react'
import Quill from 'react-quill'
import styles from './index.scss'
// import CSSModules from 'react-css-modules'
import 'react-quill/dist/quill.snow.css'
// import { ImageModal } from './image-modal'
// import { categories } from '../../constants'
import { modules, formats } from './constants'

export class RichTextEditor extends React.PureComponent {

    state = {
        name: '',
        story: '',
        cover: '',
        category: '',
        modalVisible: false,
    }

    handleChange = story => this.setState({ story })

    handleAddPhoto = () => this.setState({ modalVisible: true })

    handleModalClose = () => this.setState({ modalVisible: false })

    handleNameChange = ({ target }) => this.setState({ name: target.value })

    handleCategSelect = ({ target }) => this.setState({ category: target.value })

    handleImageUpload = ({ nativeEvent }) => {
        let photo = nativeEvent.target.files[0]
        // let formData = new FormData()
        // formData.append('photo', photo) // Send form data to BE
        const reader = new FileReader()
        reader.readAsDataURL(photo)
        reader.addEventListener(
            'load',
            e => this.setState({ cover: e.target.result }),
        )
    }

    render = () => (
        <div 
        className={styles.cont}
        >
            <Quill
                theme='snow'
                modules={modules}
                formats={formats}
                value={this.state.story}
                className={styles.editor}
                onChange={this.handleChange}
                placeholder='Once upon a time...'
            />
            <div 
            // className={styles.overlay}
            >
                <input
                    type='text'
                    placeholder='Name'
                    onChange={this.handleNameChange}
                />             
            </div>
        </div>
    )
}

// import React, { Component } from 'react';
// import Quill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import 'react-quill/dist/quill.bubble.css';
// // import './index.css'

// export class RichTextEditor extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.modules = {
// 			toolbar: [
// 		      [{ 'font': [] }],
// 		      [{ 'size': ['small', false, 'large', 'huge'] }],
// 		      ['bold', 'italic', 'underline'],
// 		      [{'list': 'ordered'}, {'list': 'bullet'}],
// 		      [{ 'align': [] }],
// 		      [{ 'color': [] }, { 'background': [] }],
// 		      ['clean']
// 		    ]
// 		};

// 		this.formats = [
// 		    'font',
// 		    'size',
// 		    'bold', 'italic', 'underline',
// 		    'list', 'bullet',
// 		    'align',
// 		    'color', 'background'
// 	  	];

// 	  	this.state = {
// 			comments: ''
// 		}

// 		this.rteChange = this.rteChange.bind(this);
// 	}

// 	rteChange = (content, delta, source, editor) => {
// 		console.log(editor.getHTML()); // rich text
// 		console.log(editor.getText()); // plain text
// 		console.log(editor.getLength()); // number of characters
// 	}

// 	render() {
// 	    return (
// 	      <div className = 'editorBg'>
// 			<Quill 
// 			theme="snow"  
// 			modules={this.modules}
// 			formats={this.formats} 
// 			onChange={this.rteChange}
// 			value={this.state.comments || ''}
// 			/>
// 	      </div>
// 	    );
// 	}

// }

