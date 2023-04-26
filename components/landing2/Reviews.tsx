import Image from 'next/image'

const reviews = [
  {
    customer: {
      name: 'John',
      image:
        'https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
    },
    rating: 5,
    review:
      "I love the personalized children's books from this website. They are so creative and engaging for my kids. The illustrations are amazing and the stories are fun to read.",
  },

  {
    customer: {
      name: 'John',
      image:
        'https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
    },
    rating: 5,
    review:
      'These books are a great way to get my kids excited about reading. The stories are fun and the illustrations are beautiful.',
  },

  {
    customer: {
      name: 'John',
      image:
        'https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
    },
    rating: 5,
    review:
      'These books are a great way to encourage my kids to read. The stories are engaging and the illustrations are amazing.',
  },

  {
    customer: {
      name: 'John',
      image:
        'https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
    },
    rating: 5,
    review:
      'These books are a great way to get my kids interested in reading. The stories are fun and the illustrations are beautiful.',
  },

  {
    customer: {
      name: 'John',
      image:
        'https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
    },
    rating: 5,
    review:
      'These books are a great way to get my kids excited about reading. The stories are engaging and the illustrations are amazing.',
  },

  {
    customer: {
      name: 'John',
      image:
        'https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
    },
    rating: 5,
    review:
      'These books are a great way to encourage my kids to read. The stories are engaging and the illustrations are beautiful.',
  },

  {
    customer: {
      name: 'John',
      image:
        'https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
    },
    rating: 5,
    review:
      'These books are a great way to get my kids interested in reading. The stories are fun and the illustrations are amazing.',
  },

  {
    customer: {
      name: 'John',
      image:
        'https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
    },
    rating: 5,
    review:
      'These books are a great way to encourage my kids to read. The stories are engaging and the illustrations are beautiful.',
  },

  {
    customer: {
      name: 'John',
      image:
        'https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
    },
    rating: 5,
    review:
      'These books are a great way to get my kids excited about reading. The stories are fun and the illustrations are amazing.',
  },

  {
    customer: {
      name: 'John',
      image:
        'https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
    },
    rating: 5,
    review:
      'These books are a great way to encourage my kids to read. The stories are engaging and the illustrations are beautiful.',
  },

  {
    customer: {
      name: 'John',
      image:
        'https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
    },
    rating: 5,
    review:
      'These books are a great way to get my kids interested in reading. The stories are fun and the illustrations are amazing.',
  },

  {
    customer: {
      name: 'John',
      image:
        'https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
    },
    rating: 5,
    review:
      'These books are a great way to encourage my kids to read. The stories are engaging and the illustrations are beautiful.',
  },
]

export const Reviews = () => {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="mx-auto grid gap-10 sm:grid-cols-2 lg:max-w-screen-lg lg:grid-cols-4">
        {reviews.map(({ customer, rating, review }, index) => (
          <div key={index}>
            <Image
              className="h-24 w-24 rounded-full object-cover shadow"
              src={customer.image}
              alt="Person"
              height={96}
              width={96}
            />
            <div className="mt-2 flex flex-col justify-center">
              <p className="text-lg font-bold">{customer.name}</p>
              <p className="mb-4 text-xs text-gray-800">{rating}/5</p>
              <p className="text-sm tracking-wide text-gray-800">{review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
