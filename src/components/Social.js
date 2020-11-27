import React, { Component } from 'react';

class Social extends Component {
    render() {
        return (
            <div >

                <div className="page-footer font-small  pt-5 pb-5 bg-dark">
                    <div className="container">
                        <ul className="list-unstyled list-inline text-center">
                            <li className="list-inline-item">
                                <a href="https://github.com/jv640" target="_blank" rel="noopener noreferrer">
                                    <i id="social-g" class="fa fa-github fa-2x social"></i>
                                </a>
                            </li>

                            <li className="list-inline-item">
                                <a href="https://www.instagram.com/yours_jatinverma/" target="_blank" rel="noopener noreferrer">
                                    <i id="social-ig" class="fa fa-instagram fa-2x social"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://in.linkedin.com/in/jv640" target="_blank" rel="noopener noreferrer">
                                    <i id="social-li" class="fa fa-linkedin-square fa-2x social"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Social;