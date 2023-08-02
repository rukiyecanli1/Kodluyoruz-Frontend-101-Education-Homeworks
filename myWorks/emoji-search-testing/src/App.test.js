import React from "react";
import App from "./App";
import { render, screen, waitFor,  fireEvent} from '@testing-library/react';
import '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
//import Adapter from 'enzyme-adapter-react-15';

beforeEach(() => {
 render(<App/>);
})

test("renders without crashing", () => {
  render(<App/>);
});

test('The title should contain 2 images and a text which is "Emoji Search"', () => {
    const image = screen.getByAltText('img1');
    expect(image.src).toContain('//cdn.jsdelivr.net/emojione/assets/png/1f638.png');  
    const h1 = screen.getByRole("heading");
    expect(h1).toHaveTextContent("Emoji Search");
    const image2 = screen.getByAltText('img2');
    expect(image2).toHaveAttribute('src' , '//cdn.jsdelivr.net/emojione/assets/png/1f63a.png');

  });

  test('20 emojis should be rendered when the app run', () => { 
      const emojis = screen.getAllByRole("listItem");
      expect(emojis.length).toEqual(20);
       });

  test('filtering should work ', () => {
    const input = screen.getByLabelText("Emoji");
    const value = "1234";
    act(() => {
        userEvent.type(input,value);
    })
    expect(screen.getByText(value)).toBeInTheDocument();

  });

  //i'm not sure..
  test('when one of the emoji be clicked, it should copy ', async() => {
    const emoji = screen.getByText("Smiley");
    act(() => {
      fireEvent.click(emoji);
     });
     let value = 'Smiley';
     act(() => {
      fireEvent.paste(emoji, value);
     });
     expect(emoji).toHaveTextContent(value);
  });



  
      //const img1 = screen.getByRole("img1", {
      //alt: "img1"
      //});
      
  