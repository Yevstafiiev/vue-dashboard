import '../global-variadles'

let mock = new MockAdapter(window.axios)

mock.onGet('/campaigns').reply(200, {
  'campaigns': [
    {
      'approved_comments': 2218,
      'approved_likes': 70147,
      'approved_posts': 158,
      'days_passed': 51,
      'days_total': 51,
      'id': 1,
      'is_featured': true,
      'name': 'Random name 1',
      'num_of_artists': 0,
      'progress': 100,
      'type': 'Challenge'
    },
    {
      'approved_comments': 744,
      'approved_likes': 136072,
      'approved_posts': 108,
      'days_passed': 92,
      'days_total': 92,
      'id': 2,
      'is_featured': true,
      'name': 'Random name 2',
      'num_of_artists': 42,
      'progress': 100,
      'type': 'Influencer campaign'
    },
    {
      'approved_comments': 1616,
      'approved_likes': 47953,
      'approved_posts': 34,
      'days_passed': 82,
      'days_total': 82,
      'id': 3,
      'is_featured': true,
      'name': 'Random name 3',
      'num_of_artists': 0,
      'progress': 100,
      'type': 'Giveaway'
    },
    {
      'approved_comments': 744,
      'approved_likes': 136072,
      'approved_posts': 108,
      'days_passed': 92,
      'days_total': 92,
      'id': 4,
      'is_featured': true,
      'name': 'Random name 2',
      'num_of_artists': 42,
      'progress': 100,
      'type': 'Influencer campaign'
    },

    {
      'approved_comments': 744,
      'approved_likes': 136072,
      'approved_posts': 108,
      'days_passed': 92,
      'days_total': 92,
      'id': 5,
      'is_featured': true,
      'name': 'Random name 2',
      'num_of_artists': 42,
      'progress': 100,
      'type': 'Influencer campaign'
    },

    {
      'approved_comments': 744,
      'approved_likes': 136072,
      'approved_posts': 108,
      'days_passed': 92,
      'days_total': 92,
      'id': 6,
      'is_featured': true,
      'name': 'Random name 2',
      'num_of_artists': 42,
      'progress': 100,
      'type': 'Influencer campaign'
    },

    {
      'approved_comments': 744,
      'approved_likes': 136072,
      'approved_posts': 108,
      'days_passed': 92,
      'days_total': 92,
      'id': 7,
      'is_featured': true,
      'name': 'Random name 2',
      'num_of_artists': 42,
      'progress': 100,
      'type': 'Influencer campaign'
    },

    {
      'approved_comments': 744,
      'approved_likes': 136072,
      'approved_posts': 108,
      'days_passed': 92,
      'days_total': 92,
      'id': 8,
      'is_featured': true,
      'name': 'Random name 2',
      'num_of_artists': 42,
      'progress': 100,
      'type': 'Influencer campaign'
    },

    {
      'approved_comments': 744,
      'approved_likes': 136072,
      'approved_posts': 108,
      'days_passed': 92,
      'days_total': 92,
      'id': 9,
      'is_featured': true,
      'name': 'Random name 2',
      'num_of_artists': 42,
      'progress': 100,
      'type': 'Influencer campaign'
    },

    {
      'approved_comments': 744,
      'approved_likes': 136072,
      'approved_posts': 108,
      'days_passed': 92,
      'days_total': 92,
      'id': 10,
      'is_featured': true,
      'name': 'Random name 2',
      'num_of_artists': 42,
      'progress': 100,
      'type': 'Influencer campaign'
    }
  ]
})

mock.onGet('/posts').reply(200, {
  'posts': [
    {
      'author_username': 'whitneylichfield',
      'link': 'https://www.instagram.com/p/Bft3X32FPnw',
      'likes_number': '173',
      'comments_number': '9',
      'id': 553041,
      'pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'author_pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'caption': 'I haven’t stuck to very many of my New Years resolutions... or any ever, but this year I started BBG by @kayla_itsines and I have to say I love it and have been having so much fun spending a little time on me every morning || Here’s to sticking to my resolutions this year 🥂 || and plus I have the cutest little workout buddies',
      'social_network': 'instagram',
      'status': 'pending'
    },
    {
      'author_username': 'whitneylichfield',
      'link': 'https://www.instagram.com/p/Bft3X32FPnw',
      'likes_number': '173',
      'comments_number': '9',
      'id': 2,
      'pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'author_pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'caption': 'I haven’t stuck to very many of my New Years resolutions... or any ever, but this year I started BBG by @kayla_itsines and I have to say I love it and have been having so much fun spending a little time on me every morning || Here’s to sticking to my resolutions this year 🥂 || and plus I have the cutest little workout buddies',
      'social_network': 'instagram',
      'status': 'pending'
    },
    {
      'author_username': 'whitneylichfield',
      'link': 'https://www.instagram.com/p/Bft3X32FPnw',
      'likes_number': '173',
      'comments_number': '9',
      'id': 3,
      'pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'author_pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'caption': 'I haven’t stuck to very many of my New Years resolutions... or any ever, but this year I started BBG by @kayla_itsines and I have to say I love it and have been having so much fun spending a little time on me every morning || Here’s to sticking to my resolutions this year 🥂 || and plus I have the cutest little workout buddies',
      'social_network': 'instagram',
      'status': 'pending'
    },
    {
      'author_username': 'whitneylichfield',
      'link': 'https://www.instagram.com/p/Bft3X32FPnw',
      'likes_number': '173',
      'comments_number': '9',
      'id': 4,
      'pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'author_pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'caption': 'I haven’t stuck to very many of my New Years resolutions... or any ever, but this year I started BBG by @kayla_itsines and I have to say I love it and have been having so much fun spending a little time on me every morning || Here’s to sticking to my resolutions this year 🥂 || and plus I have the cutest little workout buddies',
      'social_network': 'instagram',
      'status': 'pending'
    },
    {
      'author_username': 'whitneylichfield',
      'link': 'https://www.instagram.com/p/Bft3X32FPnw',
      'likes_number': '173',
      'comments_number': '9',
      'id': 5,
      'pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'author_pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'caption': 'I haven’t stuck to very many of my New Years resolutions... or any ever, but this year I started BBG by @kayla_itsines and I have to say I love it and have been having so much fun spending a little time on me every morning || Here’s to sticking to my resolutions this year 🥂 || and plus I have the cutest little workout buddies',
      'social_network': 'twitter',
      'status': 'rejected'
    },
    {
      'author_username': 'whitneylichfield',
      'link': 'https://www.instagram.com/p/Bft3X32FPnw',
      'likes_number': '173',
      'comments_number': '9',
      'id': 6,
      'pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'author_pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'caption': 'I haven’t stuck to very many of my New Years resolutions... or any ever, but this year I started BBG by @kayla_itsines and I have to say I love it and have been having so much fun spending a little time on me every morning || Here’s to sticking to my resolutions this year 🥂 || and plus I have the cutest little workout buddies',
      'social_network': 'twitter',
      'status': 'pending'
    },
    {
      'author_username': 'whitneylichfield',
      'link': 'https://www.instagram.com/p/Bft3X32FPnw',
      'likes_number': '173',
      'comments_number': '9',
      'id': 7,
      'pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'author_pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'caption': 'I haven’t stuck to very many of my New Years resolutions... or any ever, but this year I started BBG by @kayla_itsines and I have to say I love it and have been having so much fun spending a little time on me every morning || Here’s to sticking to my resolutions this year 🥂 || and plus I have the cutest little workout buddies',
      'social_network': 'twitter',
      'status': 'pending'
    },
    {
      'author_username': 'whitneylichfield',
      'link': 'https://www.instagram.com/p/Bft3X32FPnw',
      'likes_number': '173',
      'comments_number': '9',
      'id': 8,
      'pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'author_pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'caption': 'I haven’t stuck to very many of my New Years resolutions... or any ever, but this year I started BBG by @kayla_itsines and I have to say I love it and have been having so much fun spending a little time on me every morning || Here’s to sticking to my resolutions this year 🥂 || and plus I have the cutest little workout buddies',
      'social_network': 'twitter',
      'status': 'pending'
    },
    {
      'author_username': 'whitneylichfield',
      'link': 'https://www.instagram.com/p/Bft3X32FPnw',
      'likes_number': '173',
      'comments_number': '9',
      'id': 9,
      'pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'author_pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'caption': 'I haven’t stuck to very many of my New Years resolutions... or any ever, but this year I started BBG by @kayla_itsines and I have to say I love it and have been having so much fun spending a little time on me every morning || Here’s to sticking to my resolutions this year 🥂 || and plus I have the cutest little workout buddies',
      'social_network': 'youtube',
      'status': 'pending'
    },
    {
      'author_username': 'whitneylichfield',
      'link': 'https://www.instagram.com/p/Bft3X32FPnw',
      'likes_number': '173',
      'comments_number': '9',
      'id': 10,
      'pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'author_pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'caption': 'I haven’t stuck to very many of my New Years resolutions... or any ever, but this year I started BBG by @kayla_itsines and I have to say I love it and have been having so much fun spending a little time on me every morning || Here’s to sticking to my resolutions this year 🥂 || and plus I have the cutest little workout buddies',
      'social_network': 'youtube',
      'status': 'pending'
    },
    {
      'author_username': 'whitneylichfield',
      'link': 'https://www.instagram.com/p/Bft3X32FPnw',
      'likes_number': '173',
      'comments_number': '9',
      'id': 11,
      'pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'author_pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'caption': 'I haven’t stuck to very many of my New Years resolutions... or any ever, but this year I started BBG by @kayla_itsines and I have to say I love it and have been having so much fun spending a little time on me every morning || Here’s to sticking to my resolutions this year 🥂 || and plus I have the cutest little workout buddies',
      'social_network': 'youtube',
      'status': 'pending'
    },
    {
      'author_username': 'whitneylichfield',
      'link': 'https://www.instagram.com/p/Bft3X32FPnw',
      'likes_number': '173',
      'comments_number': '9',
      'id': 12,
      'pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'author_pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'caption': 'I haven’t stuck to very many of my New Years resolutions... or any ever, but this year I started BBG by @kayla_itsines and I have to say I love it and have been having so much fun spending a little time on me every morning || Here’s to sticking to my resolutions this year 🥂 || and plus I have the cutest little workout buddies',
      'social_network': 'youtube',
      'status': 'pending'
    },
    {
      'author_username': 'whitneylichfield',
      'link': 'https://www.instagram.com/p/Bft3X32FPnw',
      'likes_number': '173',
      'comments_number': '9',
      'id': 12,
      'pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'author_pic': 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320991/laptop-and-social-media-icons.jpg',
      'caption': 'I haven’t stuck to very many of my New Years resolutions... or any ever, but this year I started BBG by @kayla_itsines and I have to say I love it and have been having so much fun spending a little time on me every morning || Here’s to sticking to my resolutions this year 🥂 || and plus I have the cutest little workout buddies',
      'social_network': 'facebook',
      'status': 'pending'
    }

  ]
})
