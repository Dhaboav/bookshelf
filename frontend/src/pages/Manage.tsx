import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/Table';
import { ArrowLeft, Edit, Plus, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Props {
    mode: 'Author' | 'Genre';
}

function ManagePage({ mode }: Props) {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto pt-24 pb-4">
                <Button variant="hover" className="mb-4" onClick={() => navigate('/dashboard')}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Library
                </Button>
                <div className="mb-8">
                    <h1 className="mb-1 text-4xl font-bold">Manage {mode}</h1>
                    <p className="text-secondary">
                        Add, edit, or delete {mode.toLowerCase()} from your collection
                    </p>
                </div>

                <div className="flex flex-col gap-6 md:flex-row">
                    <Card className="max-w-sm flex-3">
                        <CardHeader>
                            <CardTitle>Add New {mode}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div>
                                    <Label htmlFor="formInput">{mode} Name</Label>
                                    <Input
                                        id="formInput"
                                        type="text"
                                        placeholder={`Enter ${mode.toLowerCase()} name`}
                                    />
                                </div>
                                <Button type="submit" className="w-full">
                                    <Plus className="mr-2 h-4 w-4" />
                                    Add {mode}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <Card className="flex-7">
                        <CardHeader>
                            <CardTitle>{mode} List (4)</CardTitle>
                        </CardHeader>

                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>{mode} Name</TableHead>
                                        <TableHead>Book Count</TableHead>
                                        <TableHead className="text-right">Action</TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody className="overflow-y-auto">
                                    <TableRow>
                                        <TableCell>Tester</TableCell>
                                        <TableCell>4</TableCell>
                                        <TableCell className="space-x-2 text-right">
                                            <Button variant="hover" size="sm">
                                                <Edit className="h-4 w-4 text-blue-600" />
                                            </Button>

                                            <Button variant="hover" size="sm">
                                                <Trash2 className="h-4 w-4 text-red-600" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default ManagePage;
