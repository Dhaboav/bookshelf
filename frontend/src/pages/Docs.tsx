import { Separator } from '@/components/mess/separator';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Edit, Eye, LayoutGrid, List, Plus, Search, Trash } from 'lucide-react';

const Docs = () => {
    return (
        <div className="bg-background min-h-screen">
            <Navigation />

            <main className="container mx-auto max-w-4xl px-4 pt-24 pb-12">
                <div className="mb-8">
                    <h1 className="mb-2 text-4xl font-bold">Documentation</h1>
                    <p className="text-muted-foreground">
                        Learn how to use MyLibrary to manage your book collection
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Getting Started */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BookOpen className="text-primary h-5 w-5" />
                                Getting Started
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">
                                Welcome to MyLibrary! This application helps you organize and manage
                                your personal book collection with ease.
                            </p>
                            <div>
                                <h4 className="mb-2 font-semibold">Key Features:</h4>
                                <ul className="text-muted-foreground list-inside list-disc space-y-1">
                                    <li>Track all your books in one place</li>
                                    <li>View statistics and insights about your collection</li>
                                    <li>Search and filter books easily</li>
                                    <li>Switch between grid and list views</li>
                                    <li>Add, edit, and manage book details</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    <Separator />

                    {/* Dashboard Overview */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Dashboard Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h4 className="mb-2 font-semibold">Statistics Cards</h4>
                                <p className="text-muted-foreground mb-2">
                                    At the top of your dashboard, you'll find key metrics about your
                                    collection:
                                </p>
                                <ul className="text-muted-foreground list-inside list-disc space-y-1">
                                    <li>
                                        <strong>Total Books</strong> - The total number of books in
                                        your library
                                    </li>
                                    <li>
                                        <strong>Genres</strong> - Number of different genres you
                                        have
                                    </li>
                                    <li>
                                        <strong>Average Rating</strong> - Average rating across all
                                        your books
                                    </li>
                                    <li>
                                        <strong>Latest Year</strong> - Publication year of your most
                                        recent book
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="mb-2 font-semibold">Charts</h4>
                                <p className="text-muted-foreground">
                                    Two interactive charts help you visualize your collection:
                                </p>
                                <ul className="text-muted-foreground list-inside list-disc space-y-1">
                                    <li>
                                        <strong>Books by Genre</strong> - A pie chart showing the
                                        distribution of genres
                                    </li>
                                    <li>
                                        <strong>Books by Year</strong> - A bar chart displaying
                                        books by publication year
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    <Separator />

                    {/* Adding Books */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Plus className="text-primary h-5 w-5" />
                                Adding Books
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <ol className="text-muted-foreground list-inside list-decimal space-y-2">
                                <li>
                                    Click the <strong>"Add Book"</strong> button in the dashboard
                                </li>
                                <li>
                                    Fill in the book details:
                                    <ul className="mt-1 ml-6 list-inside list-disc">
                                        <li>Title (required)</li>
                                        <li>Author (required)</li>
                                        <li>Genre</li>
                                        <li>Publication year</li>
                                        <li>Description</li>
                                        <li>Rating</li>
                                        <li>Cover image URL</li>
                                    </ul>
                                </li>
                                <li>
                                    Click <strong>"Add Book"</strong> to save it to your collection
                                </li>
                            </ol>
                        </CardContent>
                    </Card>

                    <Separator />

                    {/* Searching and Filtering */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Search className="text-primary h-5 w-5" />
                                Searching Books
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p className="text-muted-foreground">
                                Use the search bar to quickly find books in your collection. You can
                                search by:
                            </p>
                            <ul className="text-muted-foreground list-inside list-disc space-y-1">
                                <li>Book title</li>
                                <li>Author name</li>
                                <li>Genre</li>
                            </ul>
                            <p className="text-muted-foreground">
                                The search is case-insensitive and updates results as you type.
                            </p>
                        </CardContent>
                    </Card>

                    <Separator />

                    {/* View Modes */}
                    <Card>
                        <CardHeader>
                            <CardTitle>View Modes</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">
                                Switch between two different ways to view your books:
                            </p>

                            <div>
                                <h4 className="mb-2 flex items-center gap-2 font-semibold">
                                    <LayoutGrid className="text-primary h-4 w-4" />
                                    Grid View
                                </h4>
                                <p className="text-muted-foreground">
                                    Displays books as cards in a responsive grid layout, perfect for
                                    browsing visually with book covers.
                                </p>
                            </div>

                            <div>
                                <h4 className="mb-2 flex items-center gap-2 font-semibold">
                                    <List className="text-primary h-4 w-4" />
                                    List View
                                </h4>
                                <p className="text-muted-foreground">
                                    Shows books in a compact list format with key details, ideal for
                                    quick scanning and finding specific information.
                                </p>
                            </div>

                            <p className="text-muted-foreground text-sm">
                                Toggle between views using the grid and list icons next to the
                                search bar.
                            </p>
                        </CardContent>
                    </Card>

                    <Separator />

                    {/* Managing Books */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Managing Books</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h4 className="mb-2 flex items-center gap-2 font-semibold">
                                    <Eye className="text-primary h-4 w-4" />
                                    Viewing Book Details
                                </h4>
                                <p className="text-muted-foreground">
                                    Click on any book card or list item to view full details
                                    including description, rating, and other information.
                                </p>
                            </div>

                            <div>
                                <h4 className="mb-2 flex items-center gap-2 font-semibold">
                                    <Edit className="text-primary h-4 w-4" />
                                    Editing Books
                                </h4>
                                <p className="text-muted-foreground">
                                    From the book detail page, click the <strong>"Edit"</strong>{' '}
                                    button to modify any book information.
                                </p>
                            </div>

                            <div>
                                <h4 className="mb-2 flex items-center gap-2 font-semibold">
                                    <Trash className="text-destructive h-4 w-4" />
                                    Deleting Books
                                </h4>
                                <p className="text-muted-foreground">
                                    From the book detail page, click the <strong>"Delete"</strong>{' '}
                                    button to remove a book from your collection. This action cannot
                                    be undone.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Separator />

                    {/* Tips */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Tips & Best Practices</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="text-muted-foreground list-inside list-disc space-y-2">
                                <li>
                                    Keep your book information up to date for accurate statistics
                                </li>
                                <li>
                                    Add cover images to make your library more visually appealing
                                </li>
                                <li>Use consistent genre naming for better organization</li>
                                <li>Rate your books to track your favorites</li>
                                <li>Use the search feature to quickly find specific books</li>
                                <li>Switch between grid and list views based on your task</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default Docs;
