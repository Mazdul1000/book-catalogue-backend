import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

// update user
router.patch('/:id',
  UserController.updateUser);

// delete user
router.delete('/:id', UserController.deleteUser);

// user wishlist
router.get('/:id/wishlist', UserController.getUserWishlist)

// user readinglist
router.get('/:id/readinglist', UserController.getUserReadingList)

// get all users
router.get('/', UserController.getAllUsers);

export const UserRoutes = router;
