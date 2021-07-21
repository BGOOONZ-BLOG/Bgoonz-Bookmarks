import _ from 'lodash';

/**
 * Get all the pages located under the provided `urlPath`, not including the
 * index page. I.e.: All pages having their URLs start with `urlPath` excluding
 * the page having its URL equal to `urlPath`.
 *
 * @example
 * pages => [
 *   {'stackbit_url_path': '/'},
 *   {'stackbit_url_path': '/about'},
 *   {'stackbit_url_path': '/posts'},
 *   {'stackbit_url_path': '/posts/hello'},
 *   {'stackbit_url_path': '/posts/world'}
 * ]
 *
 * getPages(pages, /posts')
 * => [
 *   {'stackbit_url_path': '/posts/hello'},
 *   {'stackbit_url_path': '/posts/world'}
 * ]
 *
 *
 * @param {Array} pages Array of page objects. All pages must have 'stackbit_url_path' field.
 * @param {string} urlPath The url path to filter pages by
 * @return {Array}
 */
export default function getPages(pages, urlPath) {
    urlPath = _.trim(urlPath, '/');
    const urlPathParts = _.split(urlPath, '/');
    return _.filter(pages, page => {
        const pageUrlPath = _.trim(_.get(page, 'stackbit_url_path'), '/');
        const pageUrlParts = _.split(pageUrlPath, '/');
        return pageUrlParts.length > urlPathParts.length && _.isEqual(pageUrlParts.slice(0, urlPathParts.length), urlPathParts);
    });
}
