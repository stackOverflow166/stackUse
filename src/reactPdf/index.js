import React, { Component } from 'react';
// import { Document, Page } from 'react-pdf';
// import example from './example.pdf'

class ReactPdf extends Component {

    constructor(props) {
        super(props)
        // const courses = [
        //     {
        //         cam: 'A',
        //         name: 'X',
        //         id: 1
        //     },
        //     {
        //         cam: 'A',
        //         name: 'Y',
        //         id: 2
        //     }
        // ]
        // const coursess = {
        //
        // }
        // const course_array=[]
        // console.log(courses)
        // const courses_json = JSON.parse(JSON.stringify(courses))
        // for (var i=0;i< courses_json.length;i++){
        //     console.log(courses_json[i])
        //     course_array.push(courses_json[i])
        // }
        // console.log(course_array)
        // this.hasEndedTimer = this.hasEndedTimer.bind(this)
        this.hasEndedTimer= () =>{
            console.log('test')
        }
    }
    componentDidMount (){
        // this.hasEndedTimer()
    }
    // state = {
    //     numPages: null,
    //     pageNumber: 1,
    // }
    //
    // onDocumentLoad = ({ numPages }) => {
    //     this.setState({ numPages });
    // }

    render() {
        // const { pageNumber, numPages } = this.state;

        return (
            <div>
                {/*<Document*/}
                    {/*file={'./sample.pdf'}*/}
                    {/*onLoadSuccess={this.onDocumentLoad.bind(this)}*/}
                {/*>*/}
                    {/*<Page pageNumber={pageNumber} />*/}
                {/*</Document>*/}
                {/*<p>Page {pageNumber} of {numPages}</p>*/}
                <div>Test</div>
            </div>
        );
    }
}

export default ReactPdf
