const express = require('express')
const router = express.Router()

const Url = require('../models/Url')

//     GET /:shortUrl
//      Redirect to long/original URL
router.get('/:code', async (req, res) => {
	let shortUrlCode = req.params.code
	try {
		const url = await Url.findOne({ urlCode: shortUrlCode })

		if (url) {
			return res.redirect(url.longUrl)
		} else {
			return res.status(404).json('No url found')
		}
	} catch (err) {
		console.error(err)
		res.status(500).json('Server error')
	}
})

module.exports = router
