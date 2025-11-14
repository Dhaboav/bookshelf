import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { ArrowLeft, Edit, Star, Trash2 } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

// This would come from your state management or API
const sampleBooks = [
    {
        id: '1',
        title: 'The Midnight Library',
        author: 'Matt Haig',
        genre: 'Fiction',
        year: 2020,
        description:
            'A dazzling novel about all the choices that go into a life well lived. Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?',
        rating: 4.5,
        cover: undefined,
    },
    {
        id: '2',
        title: 'Atomic Habits',
        author: 'James Clear',
        genre: 'Self-Help',
        year: 2018,
        description: 'An easy and proven way to build good habits and break bad ones.',
        rating: 4.8,
        cover: undefined,
    },
];

const BookDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const book = sampleBooks.find((b) => b.id === id);

    if (!book) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 pt-24 text-center">
                    <h1 className="mb-4 text-2xl font-bold">Book not found</h1>
                    <Button asChild>
                        <Link to="/dashboard">Back to Dashboard</Link>
                    </Button>
                </div>
            </div>
        );
    }

    const handleDelete = () => {
        toast.error(`Book ${book.title} deleted`);
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto max-w-5xl px-4 pt-24 pb-12">
                <Button variant="hover" onClick={() => navigate('/dashboard')} className="mb-6">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Library
                </Button>

                <div className="grid gap-8 md:grid-cols-3">
                    {/* Book Cover */}
                    <div className="md:col-span-1">
                        <Card className="overflow-hidden">
                            <div className="aspect-3/4 bg-linear-(--gradient-primary)">
                                {book.cover ? (
                                    <img
                                        src={book.cover}
                                        alt={book.title}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center">
                                        <span className="text-primary-foreground/50 text-8xl">
                                            📚
                                        </span>
                                    </div>
                                )}
                            </div>
                        </Card>
                    </div>

                    {/* Book Details */}
                    <div className="md:col-span-2">
                        <div className="mb-4">
                            <h1 className="mb-2 text-4xl font-bold">{book.title}</h1>
                            <p className="text-muted-foreground mb-4 text-xl">by {book.author}</p>

                            <div className="mb-6 flex items-center gap-4">
                                <Badge textSize="sm">{book.genre}</Badge>

                                <span className="text-muted-foreground text-sm">
                                    Published: {book.year}
                                </span>
                                {book.rating && (
                                    <div className="flex items-center gap-1">
                                        <Star className="fill-primary text-primary h-4 w-4" />
                                        <span className="font-semibold">{book.rating}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <Card className="mb-6">
                            <CardContent className="pt-6">
                                <h2 className="mb-3 text-lg font-semibold">Description</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    {book.description || 'No description available.'}
                                </p>
                            </CardContent>
                        </Card>

                        <div className="flex gap-3">
                            <Button asChild className="flex-1">
                                <Link to={`/books/edit/${book.id}`}>
                                    <Edit className="mr-2 h-4 w-4" />
                                    Edit Book
                                </Link>
                            </Button>
                            <Button variant="delete" onClick={handleDelete} className="flex-1">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete Book
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BookDetail;
