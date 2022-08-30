import {MatchersV3, PactV3, V3MockServer} from '@pact-foundation/pact'
import TradeLaneService from './TradeLaneService'
import * as path from 'path'
import {HttpApiMock} from "../httpApiMock";

// Create a 'pact' between the two applications in the integration we are testing
const provider = new PactV3({
    dir: path.resolve(process.cwd(), 'pacts'),
    consumer: 'front-end',
    provider: 'trade-lanes',
    logLevel: "debug",
});

const tradeLaneExample = {
    code: 'some-code',
    id: '',
};
const EXPECTED_BODY = MatchersV3.eachLike({
    results: [tradeLaneExample]
});

describe('GET /dogs', () => {
    it('returns an HTTP 200 and a pagination result of docs', async () => {
        provider
            .given('I have a list of trade-lanes')
            .uponReceiving('a request for paginated trade-lanes with the builder pattern')
            .withRequest({
                method: 'GET',
                path: '/trade-lanes',
                query: {page: '1', pageSize: '10'},
                headers: {Accept: 'application/json'},
            })
            .willRespondWith({
                status: 200,
                headers: {'Content-Type': 'application/json'},
                body: EXPECTED_BODY,
            });

        await provider.executeTest(async (mockserver: V3MockServer) => {
            // Act: test our API client behaves correctly

            const apiService = new HttpApiMock(mockserver.url)
            const service = new TradeLaneService(apiService)
            const response = await service.getAllTradeLanes(1, 10)

            // Assert: check the result
            expect(response.results[0]).toEqual(tradeLaneExample);
        });
    });
});
