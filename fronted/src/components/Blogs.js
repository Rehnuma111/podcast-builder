import { Container } from '@mui/material';
import React from 'react'

const Blog = () => {
    return (
        <>
            <Container>
                <div className="row container-fluid">
                    <div className='col-md-4'>
                        <div class="card" style={{ width: "28rem" }}>
                            <img src="https://mymsaa.org/wp-content/uploads/2021/06/podcasts2.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                   
                    <div className='col-md-4'>
                        <div class="card" style={{ width: "28rem" }}>
                            <img src="https://mymsaa.org/wp-content/uploads/2021/06/podcasts2.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className='col-md-4'>
                        <div class="card" style={{ width: "28rem" }}>
                            <img src="https://mymsaa.org/wp-content/uploads/2021/06/podcasts2.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>

        </>

    )
}

export default Blog;