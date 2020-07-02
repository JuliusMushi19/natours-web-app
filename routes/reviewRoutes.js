/* eslint-disable prettier/prettier */
/* eslint-disable prefer-object-spread */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable prettier/prettier */
// /* eslint-disable import/newline-after-import */
// /* eslint-disable no-console */
/* eslint-disable prettier/prettier */
const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('./../controllers/authController');

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router.route('/')
.get(reviewController.getAllReview)
.post(authController.restrictTo('user'), reviewController.setTourUserIds, reviewController.createReview);

router.route('/:id')
.get(reviewController.getReview)
.patch(authController.restrictTo('user', 'admin'), reviewController.updateReview)
.delete(authController.restrictTo('user', 'admin'), reviewController.deleteReview);

module.exports = router;