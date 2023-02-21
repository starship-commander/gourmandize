import React from "react"
import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import MyPosts from "./MyPosts"
import { screen } from "@testing-library/react"


describe("<MyPosts />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
                <MyPosts />
            </BrowserRouter>
        )
       
    })
    it("it has a heading", () => {
        render(
            <BrowserRouter>
                <MyPosts />
            </BrowserRouter>
        )
        expect(screen.getByRole('heading', {name: /my posts/i})).toBeInTheDocument()
        
    })
    it("renders review content", () => {
        render(
            <BrowserRouter>
                <MyPosts currentUser={user} reviews={review}/>
            </BrowserRouter>
        )
        expect(screen.getByText(/the cheeseburger was delicious, and fresh!/i)).toBeInTheDocument()
    })
    it("has a button for see more", () => {
        render(
            <BrowserRouter>
                <MyPosts currentUser={user} reviews={review}/>
            </BrowserRouter>
        )
        expect(screen.getByRole('button', {name: /see more/i})).toBeInTheDocument()
    })
    it("has a image", () => {
        render(
            <BrowserRouter>
                <MyPosts currentUser={user} reviews={review}/>
            </BrowserRouter>
        )
        expect(screen.getByRole('img', {name: /card/i})).toBeInTheDocument()
    })
    

    const user =  {
        email: 'cheesy_boy@email.com',
        password: 'cheese',
        username: 'CheesyBoy',
        id: 1
    }
    const review = [{
        meal: 'cheeseburger',
        content: 'The cheeseburger was delicious, and fresh!',
        rating: 5,
        user_id: 1,
        restaurant_id: 1
    }]
    
    
})


