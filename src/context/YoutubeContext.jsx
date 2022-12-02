import { createContext, useContext } from "react";
import Youtube from '../apis/youtube'
// import FakeData from '../apis/fake-data'
import YoutubeClient from "../apis/real-data";

export const YoutubeApiContext = createContext()

const client = new YoutubeClient()
// const client = new FakeData()
const youtube = new Youtube(client)

export function YoutubeApiProvider({ children }) {
    return (
        <YoutubeApiContext.Provider value={{ youtube }}>
            {children}
        </YoutubeApiContext.Provider>
    )
}

export function useYoutubeAPi() {
    return useContext(YoutubeApiContext)
}