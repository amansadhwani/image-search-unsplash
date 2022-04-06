import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { mockResp } from "./components/__test__/response";




beforeEach(() => server.resetHandlers());
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

const followersResponse = rest.get('https://api.unsplash.com/search/photos', (req, res, ctx) => {
    return res(ctx.status(200),ctx.json(mockResp))
})

const handlers = [followersResponse]
const server = new setupServer(...handlers)

export {server,rest}